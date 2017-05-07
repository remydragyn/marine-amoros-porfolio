var app           = require('app/app');
var channels      = require('channels');
var Marionette    = require('backbone.marionette');

var IndexItemView = require('views/IndexItemView');
var template      = require('templates/index-list.hbs');


module.exports = Marionette.CompositeView.extend({
    className: 'index-list-container',
    template: template,

    childView: IndexItemView,
    childViewContainer: ".index-list-js",

    ui: {
        indexArrow: '.index-arrow-js',
        indexList: '.index-list-js',
        indexItem: '.index-item-js',
    },

    events: {
        'click @ui.indexArrow': 'onClickIndexArrow',
    },


    initialize: function () {
        channels.navChannel.on('hoverSubItemNav', this.hoverSubItemNav, this);
    },

    onBeforeRender: function () {},

    onRender: function () {
    },

    onShow: function () {
        // binds view elements to ui hash
        this.bindUIElements();
        this.ui.indexItem.first().addClass('active').css('opacity', 1);
    },

    onClickIndexArrow: function (e) {
        var $arrow = $(e.currentTarget),
            $list = this.ui.indexList,
            $items = $list.children(),
            length = $items.length-1,
            currentIndex = $list.find('.active').index(),
            newIndex = currentIndex,
            direction = 'next';


        if ($arrow.hasClass('prev-arrow')) {
            direction = 'prev';
            newIndex = newIndex-1;
            if (newIndex < 0) {
                newIndex = length;
            }

        } else {
            newIndex = newIndex+1;
            if (newIndex > length) {
                newIndex = 0;
            }

        }

        channels.navChannel.trigger('clickIndexArrow', {
            index: newIndex
        });

        this.moveIndexItem(direction, newIndex, $items, $list);
    },

    hoverSubItemNav: function (options) {
        var $list = this.ui.indexList,
            $items = $list.children(),
            newIndex = options.index,
            direction = 'next';
        
        this.moveIndexItem(direction, newIndex, $items, $list);
    },

    moveIndexItem: function (direction, newIndex, $items, $list) {
        var newItem = $items[newIndex],
            $currentItem = $list.find('.active');

        var tl = new TimelineMax();

        tl.totalProgress(1, false);

        tl.to($items, 0.2, {alpha:0, display:'none', className: '-=active'})
          .fromTo(newItem, 0.2, {alpha: 0, display:'none', className: '+=active'}, {alpha:1, display:'block'})
        
    }

});
