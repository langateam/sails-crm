/**
 * Phone.js
 *
 * @description :: A phone number
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    value: 'string',
    type: {
      model: 'Label'
    }

  }
};

