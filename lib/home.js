var path = require('path')

exports.register = function(server, options, next) {

  server.route( {
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: path.join(__dirname, '../public'),
          listing: true
        }
      }
    });

  return next();
};

exports.register.attributes = {
  name: 'Home'
};
