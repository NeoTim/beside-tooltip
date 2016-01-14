'use strict';

var besideTooltip = require('./beside-tooltip');

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window === 'object') {
    window.besideTooltip = factory();
  }
}(function() {

  return besideTooltip;
}));
