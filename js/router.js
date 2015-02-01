define([
  'jquery',
  'underscore',
  'backbone',
  'models/flights',
  'views/flights',
  'collections/flights',
], function($, _, Backbone, Flight, FlightCollection, FlightCollectionView){

	// Create a single router for the app
	var router = new (Backbone.Router.extend({
	    routes: {
	      '': 'index',
	    },

	    // index: function() {

	    // },

	    initialize: function() {
	    	var flightCollection = new FlightCollection();    
            var view = new FlightCollectionView({model: Flight});
            console.log(flightCollection);
            flightCollection.fetch();
            flightCollection.bind('reset', function () {
                view.render();
            });
	    },

	    start: function() {
	    	Backbone.history.start();
	    }
  	}));

  	var initialize = function() {
  		router.start();
  	}
 //  var initialize = function(){
 //  	console.log("init router2 ");
 //    var router = new Router;
 //    // app_router.on('showProjects', function(){
 //    //   // Call render on the module we loaded in via the dependency array
 //    //   // 'views/projects/list'
 //    //   var projectListView = new ProjectListView();
	//    //    projectListView.render();
	//    //  });
	// router.on('', function() {

	// });
 //    Backbone.history.start();
 //  };
	return {
		initialize: initialize
	};
});