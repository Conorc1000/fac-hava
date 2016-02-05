var Hapi = require('hapi');
var Inert = require('inert');
var home = require('./home.js');
var Handlebars = require('handlebars');
var Vision = require('vision');
var Engine = require('hapi-react')();

exports.init = function(port, next) {


  var server = new Hapi.Server();
  server.connection({
    port: port
  });

  server.register([Inert, Vision, home], function(err) {
    if (err) {
      return next(err);
    }

    server.start(function(err) {
      return next(err, server);

    });
  });

  module.exports = server;
};
