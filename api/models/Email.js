/**
 * Email.js
 *
 * @description :: An Email
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
    value: 'string',
    type: {
      model: 'Label'
    },
    contact: {
      model: 'Contact'
    }
  }
};

