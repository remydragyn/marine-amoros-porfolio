var Marionette = require('backbone.marionette');
var AppController = require('controllers/AppController.js');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'index',
        'project/:slug(/)': 'project',
        '*default': 'defaultHandler'
    },

    controller: new AppController()

});
