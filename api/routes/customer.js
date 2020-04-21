var express = require('express');
var router = express.Router();

const delay = 0;

router.get('', function(req, res) {
  setTimeout(() => {
    const customer = customers.find(c => c.id == req.query.customerId)
    customer.lastRefreshed = new Date();
    res.send(customer);
    return;
  }, delay);
});

router.get('/random-numbers', function(req, res) {
  setTimeout(() => {

    const result = [];
    for(i = 0; i<6; i++) {
      const number = Math.floor(Math.random() * 9) + 1  ;
      result.push(number);
    }
    res.send(result);
  }, delay);
});


router.post('', function(req, res) {
  setTimeout(() => {
    const customer = req.body;
    customer.lastRefreshed = new Date();
    const index = customers.findIndex(c => c.id == customer.id);
    if (index != -1) {
      customers[index] = customer;
    }
    res.send(customer);
    return;
  }, delay);
});

let customers = [
  {
    id: 1,
    name: 'Customer 1',
    lastRefreshed: new Date()
  },
  {
    id: 2,
    name: 'Customer 2',
    lastRefreshed: new Date()
  },
  {
    id: 3,
    name: 'Customer 3',
    lastRefreshed: new Date()
  },
  {
    id: 4,
    name: 'Customer 41',
    lastRefreshed: new Date()
  }    
]

module.exports = router;
