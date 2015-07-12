/**
 * Address.js
 *
 * @description :: Mailing Address for a Location
 * @docs        :: http://sailsjs.org/#!documentation/models
 */
module.exports = {

  attributes: {
    line1: 'string',
    line2: 'string',
    city: 'string',
    state: 'string',
    postalCode: 'string',
    country: 'string',
    type: {
      model: 'Label'
    }
  }
};

