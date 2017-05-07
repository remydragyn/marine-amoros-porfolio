var app        = require('app/app');
var channels   = require('channels');
var Marionette = require('backbone.marionette');

var WorkItemView = require('views/WorkItemView');


module.exports = Marionette.CollectionView.extend({
    tagName: 'ul',
    childView: WorkItemView,

    childEvents: function () {return {}},

    ui: {
        subNavItem: '.sub-nav-item-js',
    },

    events: {},

    initialize: function () {
        channels.navChannel.on('clickIndexArrow', this.clickIndexArrow, this);
    },

    onShow: function () {
        // binds view elements to ui hash
        this.bindUIElements();

        this.ui.subNavItem.first().addClass('hover');
    },

    clickIndexArrow: function (options) {
        var $el = this.$el,
            index = options.index,
            $subNavItem = $el.children('.sub-nav-item-js');

        $subNavItem.removeClass('hover');

        $($subNavItem[index]).addClass('hover');
    }

    

});
