/*
 * Main flight collection code
 */

define([
  'underscore',
  'backbone',
  'models/flights'
], function(_, Backbone, Flight){

	// Create the flights collection and set the url as the JSON file
	var FlightCollection = Backbone.Collection.extend({
		// defaults: {
		// 	model: Flight
		// },
    	model: Flight,
    	url: 'test.json',

		parse: function(response) {
			return response.flights;
		}
	});

	return FlightCollection;
});