var CIO = require('../lib/customerio-node');
var siteId = require('./config').siteId;
var apiKey = require('./config').apiKey;
var customerId = require('./config').customerId;
var cio = new CIO(siteId, apiKey);

cio.track(customerId, {
  name: 'updated',
  data: {
    updated: true,
    plan: 'free'
  }
});
