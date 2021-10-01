/**
 * Ad.js
 *
 * @description :: Ad represents an ad object. It requires a domain and can have an optional company and industry.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
  attributes: {

    company: {
      model: 'company',
      required: false
    },
    embedCode: {
      type: 'json',
      columnType: 'array',
      required: true
    },
    featured: {
      type: 'boolean',
      defaultsTo: false
    },
    title: {
      type: 'json',
      columnType: 'array',
      required: true
    },
    link: {
      type: 'string',
      required: false,
      maxLength: 255
    },
    enabled: {
      type: 'boolean',
      defaultsTo: true
    },
    // domain: {
    //   model: 'domain',
    //   required: true
    // },
    // industry: {
    //   model: 'industry',
    //   required: false
    // }
  }
};
