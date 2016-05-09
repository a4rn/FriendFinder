// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require('path');



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // ---------------------------------------------------------------------------

  // Basic route that sends the user first to the AJAX Page
  app.get('/', function(req, res) {
    //res.send("Welcome to the Friend Finder Page!")
    res.sendFile(path.join(__dirname + '/../public/home.html'));
  });


  app.get('/survey', function(req, res) {
    //res.send("sends Survey Page!")
    res.sendFile(path.join(__dirname + '/../public/survey.html'));
  });

};