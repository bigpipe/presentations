'use strict';

var BigPipe = require('bigpipe')
  , port = process.env.PORT || 8081;

//
// Initialise the BigPipe server.
//
var pipe = BigPipe.createServer(port, {
  dist: __dirname +'/dist',
  pages: [
    BigPipe.Page.extend({
      view: 'views/index.ejs',
      pagelets: 'pagelets',
    }).on(module)
  ]
});

//
// Listen for errors and the listen event.
//
pipe.on('error', function error(err) {
  console.error(
    'Server received an error:'+ err.message, err.stack
  );
});

pipe.once('listening', function listening() {
  console.log(
    'Example is now running on http://localhost:%d', port
  );
});
