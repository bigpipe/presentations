'use strict';

require('bigpipe').Pagelet.extend({
  name: 'base',
  view: 'view.ejs',

  //
  // Set pagelet mode to SVG for correct NameSpaceURI.
  //
  mode: 'svg',

  //
  // Element attributes.
  //
  attributes: {},

  //
  // Default fake delay of 1 second.
  //
  delay: 1000,

  //
  // Supply position to view.
  //
  get: function(render) {
    var pagelet = this;

    setTimeout(function ready() {
      render(null, { attributes: pagelet.attributes });
    }, pagelet.delay);
  }
}).on(module);
