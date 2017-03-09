var app        = require('app/app');
var channels   = require('channels');
var Marionette = require('backbone.marionette');
var template   = require('templates/nav.hbs');

var WorkListView = require('views/WorkListView');


module.exports = Marionette.LayoutView.extend({
    className: 'nav-wrapper wrapper',

    template: template,

    regions: {
        workList: '.work-list-js',
        aboutList: '.about-list-js'
    },

    events: {},

    initialize: function () {},

    onBeforeRender: function () {},

    onRender: function () {},

    onShow: function () {
        this.workListView = new WorkListView({
            collection: app.workCollection
        });
        this.workList.show(this.workListView);
    },

    onBeforeDestroy: function () {},

    onDestroy: function () {},

});
