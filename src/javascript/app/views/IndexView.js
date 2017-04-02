// var app           = require('app/app');
var channels      = require('channels');
var Marionette    = require('backbone.marionette');
var template      = require('templates/index.hbs');


// VIEW
var NavView       = require('views/NavView'); 
var ContentView   = require('views/ContentView'); 
// var ProjectsListView  = require('views/ProjectsListView');

module.exports = Marionette.LayoutView.extend({

    className: 'page page-index',

    template: template,

    regions: {
        regionNav: '.region-nav',
        regionContent: '.region-content'
    },

    ui: {},

    events: {},

    initialize: function () {},

    onShow: function () {
        this.navView = new NavView();
        this.regionNav.show(this.navView);

        this.contentView = new ContentView({
            collection: app.workCollection,
        });
        this.regionContent.show(this.contentView);
    }

});
