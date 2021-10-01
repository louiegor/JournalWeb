module.exports ={
    
    attributes:{
        // ads: {
        //     collection: 'ad',
        //     via: 'company'
        //   },
          handle: {
            type: 'string'
          },
          logo: {
            type: 'string'
          },
          name: {
            type: 'string',
            required: true,
            maxLength: 255,
            unique: true
          },
          enabled: {
            type: 'boolean',
            defaultsTo: true
          },
          domain: {
            model: 'domain',
            required: true
          },
        //   industry: {
        //     model: 'industry',
        //     required: false
        //   },
        //   industries: {
        //     collection: 'industry',
        //     via: 'companies'
        //   },
          provinces: {
            type: 'json'
          },
          states: {
            type: 'json'
          },
          primaryWeb: {
            type: 'string',
            required: false
          },
          secondaryWeb: {
            type: 'string',
            required: false
          },
          tertiaryWeb: {
            type: 'string',
            required: false
          },
          quaternaryWeb: {
            type: 'string',
            required: false
          },
          quinaryWeb: {
            type: 'string',
            required: false
          },
          facebookUrl: {
            type: 'string',
            required: false
          },
          twitterUrl: {
            type: 'string',
            required: false
          },
          linkedInUrl: {
            type: 'string',
            required: false
          },
          youTubeUrl: {
            type: 'string',
            required: false
          },
        //   videos: {
        //     collection: 'companyVideo',
        //     via: 'company'
        //   },
          custom_boolean: {
            type: 'boolean'
          },
          custom_json: {
            type: 'json'
          }

    }
}