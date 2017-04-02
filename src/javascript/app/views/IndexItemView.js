var app        = require('app/app');
var channels   = require('channels');
var Marionette = require('backbone.marionette');
var template   = require('templates/index-item.hbs');


module.exports = Marionette.ItemView.extend({

    tagName: 'li',
    className: 'index-item index-item-js',
    
    template: template,

    templateHelpers: function() {return {}},

    ui: {},

    events: {},

    initialize: function () {},


    modelChanged: function () {}

});
