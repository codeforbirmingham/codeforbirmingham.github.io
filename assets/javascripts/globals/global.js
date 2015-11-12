/*
============================================================
  global.js
  =========

  Module       : Code for Birmingham
  Dependencies : jQuery
============================================================
*/

'use strict';

(function($) {

  /*
  ============================================================
    Global Module
  ============================================================
  */

  var that, m, s,
      CB = {

    /*
    ============================================================
      Models
    ============================================================
    */

    models: {

      // global settings
      globals: {},

      // browser data
      browser: {
        mobile     : false,
        iOS        : !!navigator.userAgent.match(/(?:iPhone|iPad|iPod)/i),
        android    : !!navigator.userAgent.match(/(?:Android)/i),
        mac        : !!navigator.platform.match(/(?:Mac)/i),
        linux      : !!navigator.platform.match(/(?:Linux)/i),
        windows    : !!navigator.platform.match(/(?:Win)/i),
        supports   : {},
        clickEvent : 'click'
      },

    },

    /*
    ============================================================
      Selectors
    ============================================================
    */

    selectors: {},

    /*
    ============================================================
      Methods
    ============================================================
    */

    preInit: function() {

      // lazy mobile detection
      if ((m.browser.iOS) || (m.browser.android)) {

        // update browser data
        m.browser.mobile = true;
        m.browser.clickEvent = 'touchstart';

      }

      // set global selectors
      s.$html   = $('html');
      s.$body   = s.$html.find('body');
      s.$header = s.$html.find('.header');
      s.$main   = s.$html.find('.main');
      s.$footer = s.$html.find('.footer');

      // launch application
      that.init();

    },

    init: function() {}

  };

  // bind global vars
  that = CB,
  m    = that.models,
  s    = that.selectors;

  // bind module to window
  window.CB = CB;

  // document loaded
  $(document).ready(function() {

    // let's get this party started
    CB.preInit();

  });

})(jQuery);
