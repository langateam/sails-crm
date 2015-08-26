/**
 * Contact.js
 *
 * @description :: Contact information for a User. Created by system.
 * @docs        :: http://passportjs.org/docs/profile
 */
module.exports = {

  attributes: {
    name: 'string',
    familyName: 'string',
    givenName: 'string',
    middleName: 'string',

    emails: {
      collection: 'Email',
      via: 'contact'
    },
    phones: {
      collection: 'Phone'
    },
    locations: {
      collection: 'Location'
    },
    organization: {
      model: 'Organization'
    },
    groups: {
      collection: 'Group'
    },
    website: {
      model: 'Website'
    }

  }
};

