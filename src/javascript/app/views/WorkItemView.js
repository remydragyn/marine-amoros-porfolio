var app        = require('app/app');
var channels   = require('channels');
var Marionette = require('backbone.marionette');
var template   = require('templates/work-item.hbs');


module.exports = Marionette.ItemView.extend({

    tagName: 'li',
    className: 'sub-nav-item sub-nav-item-js',
    
    template: template,

    templateHelpers: function() {return {}},

    ui: {
        subPartName: '.sub-part-name-js'
    },

    events: {
        'mouseenter @ui.subPartName': 'onMouseEnterSubPartName'
    },

    initialize: function () {},

    onMouseEnterSubPartName: function () {
        var $el = this.$el;

        if ($el.hasClass('hover')) {
            return
        }

        $('.sub-nav-item-js').removeClass('hover');
        $el.addClass('hover');

        var index = $el.parent().children('.hover').index();

        channels.navChannel.trigger('hoverSubItemNav', {
            index: index
        });
    }

});
