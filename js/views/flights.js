// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  'collections/flights',
  // 'text!templates/projects/list.html'
], function($, _, Backbone, FlightCollection){
  
  	var FlightCollectionView = Backbone.View.extend({
        el: "#flights",
        template: _.template($('#flightsTemplate').html()),
        render: function(e) {
            console.log("render  view");
            // _.each(this.model.models, function(flight) {
            //   console.log("test");
            //     // var flightsTemplate = this.template(flight.toJSON());
            //     // $(this.el).append(flightsTemplate);
            // }, this);

            //return this;
        },

     
        // initialize: function () {
        // 	//console.log("init view");
        //     this.collection = new FlightCollection();
        //     //this.collection.bind('reset', this.render, this);
        //     //this.collection.bind('change', this.render, this)
        //     this.collection.fetch();
        //     this.render();

        // },
     
        // render: function () {
        // 	console.log("view render");
        //     console.log(this.collection.toJSON());
        //     _.each(this.collection.models, function (item) {
        //         console.log("hello");
        //         that.renderFlight(item);
        //     }, this);
        // },
     
        renderFlight: function (item) {
            console.log("render flight");
            // var restaurantView = new RestaurantView({
            //     model: item
            // });
            // console.log(restaurantView);
            // this.$el.append(restaurantView.render().el);
        }
    });


  	return FlightCollectionView;
});