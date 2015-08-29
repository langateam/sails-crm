var sails = require('sails');
require('babel/register');

sails.lift({
  log: {
    level: 'info'
  },
  hooks: {
    grunt: false,
    crm: false
  }
})
