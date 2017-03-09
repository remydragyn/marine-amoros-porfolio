var app = require('app/app');
var channels = require('channels');
var Marionette = require('backbone.marionette');
var TweenMax       = require('../../libs/TweenMax/TweenMax');
var TimelineLite   = require('../../libs/TweenMax/TimelineLite');

module.exports = app.Behaviors.Navigator = Marionette.Behavior.extend({

    ui: {
        links: '[data-navigate], a[href^="/"]',
        loader: '.loader-container',
        page: '.page',
        path: '.st0'
    },

    events: {
        'click @ui.links': 'onClickNavigate'
    },

    initialize: function() {
        // channels.loaderChannel.on('hideLoader', this.hideLoader, this);
    },

    onClickNavigate: function (e) {
        if ($(e.currentTarget).hasClass('no-capture')) {
            return;
        }
        e.preventDefault();
        var currentUrl = "/"+Backbone.history.getFragment();
        this.url = $(e.currentTarget).data('navigate') || $(e.currentTarget).attr('href');
        
        // if(currentUrl != this.url) {

        //     currentUrl = this.url;

        //     this.showLoader();
        //     return
        // }

        this.triggerNavigate();
    },

    triggerNavigate: function () {
        channels.globalChannel.trigger('navigate', {
            url: this.url,
            trigger: true
        });
    },

    // showLoader: function() {
    //     var $window = $(window);

    //     new TimelineLite({onComplete: _.bind(this.triggerNavigate, this)})
    //         .to(this.ui.path, 0, {'animation-iteration-count': 'infinite', 'stroke-dashoffset': ""})
    //         .to(this.ui.page, 0.8, {y: -50, alpha: 0})
    //         .to(this.ui.loader, 0.8, {y: 0, alpha: 1})
    //         .to($window, 0, {scrollTop:0 })
    // },

    // hideLoader: function() {
    //     new TimelineLite().delay(0.5)
    //         .to(this.ui.path, 1, {'animation-iteration-count': '1', 'stroke-dashoffset': 0})
    //         .to(this.ui.loader, 0.8, {y: 50, alpha: 0})
    //         .to(this.ui.page, 0.8, {y: 0, alpha: 1})
    // }

});
