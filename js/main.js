/*
 * Main Javascript file to configure all depencies and initialize app
 */

require.config({
  paths: {
    jquery: '../libs/jquery/jquery-min',
    underscore: '../libs/underscore/underscore-min',
    backbone: '../libs/backbone/backbone-min'
  }
});

require([
  'app',
], function(App){
  App.initialize();
});