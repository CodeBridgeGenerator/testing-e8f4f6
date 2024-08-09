const users = require("./users/users.service.js");
const dashboard = require("./dashboard/dashboard.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(dashboard);
    // ~cb-add-configure-service-name~
};
