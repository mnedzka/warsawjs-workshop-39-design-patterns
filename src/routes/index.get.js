'use strict';

module.exports = function (app, { db }) {
  app.get('/', function (request, response) {
    response.view('index', {});
  });
};
