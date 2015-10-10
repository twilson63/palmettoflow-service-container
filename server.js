var fetchConfig = require('zero-config')
var config = fetchConfig(__dirname, { dcValue: 'us-east-1'})

var palmetto = require(config.get('palmetto.adapter'))
var ee = palmetto(config.get('palmetto.options'))

var services = config.get('palmetto.services')

// init services
services.map(function (svc) {
  var s = require(svc)
  s(ee)
})

require('health-server')