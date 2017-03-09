var app        = require('app/app');
var channels   = require('channels');
var Marionette = require('backbone.marionette');

var WorkItemView = require('views/WorkItemView');


module.exports = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: WorkItemView,

    childEvents: function () {return {}},

    events: {},

    initialize: function () {},

    onBeforeRender: function () {},

    onRender: function () {},

    onShow: function () {},

    onBeforeDestroy: function () {},

    onDestroy: function () {},

});
