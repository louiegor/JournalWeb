/**
 * Session Configuration
 * (sails.config.session)
 *
 * Use the settings below to configure session integration in your app.
 * (for additional recommended settings, see `config/env/production.js`)
 *
 * For all available options, see:
 * https://sailsjs.com/config/session
 */

module.exports.session = {

  /***************************************************************************
  *                                                                          *
  * Session secret is automatically generated when your new app is created   *
  * Replace at your own risk in production-- you will invalidate the cookies *
  * of your users, forcing them to log in again.                             *
  *                                                                          *
  ***************************************************************************/
  secret: '9724dd4770dedc701d6200b029a7d313',
  // adapter: 'connect-mongo',
  
  // url: 'mongodb://louiegor:58025802@cluster0-shard-00-00.nyqlv.mongodb.net:27017,cluster0-shard-00-01.nyqlv.mongodb.net:27017,cluster0-shard-00-02.nyqlv.mongodb.net:27017/test?ssl=true&replicaSet=atlas-12tdj9-shard-0&authSource=admin&retryWrites=true&w=majority',
  // collection:'sessions',
  // auto_reconnect: false,
  // ssl: false,
  // stringify: true


  // auto_reconnect: false,
  // mongoOptions:{
  //   server: {
  //     ssl:        true,
  //     stringify: false,
  //     sslValidate:false,

  //   }
  // }
  



  /***************************************************************************
  *                                                                          *
  * Customize when built-in session support will be skipped.                 *
  *                                                                          *
  * (Useful for performance tuning; particularly to avoid wasting cycles on  *
  * session management when responding to simple requests for static assets, *
  * like images or stylesheets.)                                             *
  *                                                                          *
  * https://sailsjs.com/config/session                                       *
  *                                                                          *
  ***************************************************************************/
  // isSessionDisabled: function (req){
  //   return !!req.path.match(req._sails.LOOKS_LIKE_ASSET_RX);
  // },

};
