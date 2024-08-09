const { Dashboard } = require('./dashboard.class');
const createModel = require('../../models/dashboard.model');
const hooks = require('./dashboard.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/dashboard', new Dashboard(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('dashboard');

  service.hooks(hooks);
};