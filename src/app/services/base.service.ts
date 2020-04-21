import { Observable, ReplaySubject, interval } from 'rxjs';

export class CacheOptions {
  constructor(cacheOptions: Partial<CacheOptions>) {
    this.key = cacheOptions.key;
    this.id = cacheOptions.id;
    this.refresh = cacheOptions.refresh;
    this.lifespan = cacheOptions.lifespan;
    this.autoRefresh = cacheOptions.autoRefresh;
  }
  key: string; // Unique key name for the item (e.g. customers)
  id?: any; // Optional id for the cache object (e.g. customerId)
  refresh?: boolean; // if true then clear the cache and reload
  lifespan?: number; // Number of seconds to keep in cache
  autoRefresh?: boolean; // Indicates whether the item should be automatically refreshed as soon as its lifespan has expired
}

class CacheEntry<T> extends CacheOptions {
  item: ReplaySubject<T>;
  obs: Observable<T>;
  timeAdded: Date;

  constructor(cacheEntry: Partial<CacheEntry<T>>) {
    super(cacheEntry);
    this.item = cacheEntry.item;
    this.obs = cacheEntry.obs;
    this.timeAdded = cacheEntry.timeAdded;
  }

  get hasExpired(): boolean {
    if (this.lifespan == null) {
      return false;
    }
    const now = new Date();
    const elapsed = (now.getTime() - this.timeAdded.getTime()) / 1000;
    return elapsed >= this.lifespan;
  }
}

export class BaseService {
  private cache: CacheEntry<any>[] = [];

  private timer = interval(1000);

  constructor() {
    this.timer.subscribe(res => this.autoRefreshCache());
  }

  protected autoRefreshCache(): void {
    this.cache
      .filter(c => c.autoRefresh === true && c.hasExpired)
      .forEach(ci => {
        ci.obs.subscribe(
          x => {
            ci.timeAdded = new Date();
            ci.item.next(x);
          },
          x => ci.item.error(x)
        );
      });
  }

  // Sets the value of a ReplaySubject in the cache
  protected updateCachedValue<T>(value: T, obs: Observable<T>, key: string, id: any) {

    const options = new CacheOptions({key, id});
    let entry = this.getFromCache<T>(options);
    if (entry == null) {
      entry = this.addToCache(new ReplaySubject<T>(1), obs, options);
    }
    const replay: ReplaySubject<T> = entry.item as ReplaySubject<T>;
    replay.next(value);
  }

  protected cacheable<T>(
    obs: Observable<T>,
    options: CacheOptions
  ): Observable<T> {
    let entry = this.getFromCache<T>(options);
    let replay: ReplaySubject<T> = null;
    let subscribeRequired = false;
    if (entry != null) {
      replay = entry.item as ReplaySubject<T>;
    } else {
      replay = new ReplaySubject<T>();
      entry = this.addToCache(replay, obs, options);
      subscribeRequired = true;
    }

    if (subscribeRequired || options.refresh || entry.hasExpired) {
      obs.subscribe(
        x => {
          entry.timeAdded = new Date();
          replay.next(x);
        },
        x => replay.error(x)
      );
    }
    return replay.asObservable();
  }

  private addToCache<T>(
    replay: ReplaySubject<T>,
    obs: Observable<T>,
    options: CacheOptions
  ): CacheEntry<T> {
    if (this.getFromCache(options)) {
      throw new Error(
        `Cannot add to cache. An item already exists with key: ${options.key}; id: ${options.id}`
      );
    }

    // The new cached entry we are going to add
    const entry: CacheEntry<T> = new CacheEntry<T>(
    {
      item: replay,
      obs,
      timeAdded: new Date(),
      key: options.key,
      id: options.id,
      lifespan: options.lifespan,
      autoRefresh: options.autoRefresh
    });

    this.cache.push(entry);
    return entry;
  }

  // Returns an item from the cache. This is recursive as a cache item could itself be an array of
  // cache items.
  private getFromCache<T>(options: CacheOptions): CacheEntry<T> {
    const result = this.cache.find(
      c => c.key === options.key && c.id === options.id
    );
    return result;
  }
}
