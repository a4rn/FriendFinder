// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources. 
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var path = require('path');
var friendsList = require('../data/friends.js')



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  // API GET Requests
  // ---------------------------------------------------------------------------

  app.get('/api/friends', function(req, res) {
    // for (var i = 0; i < friendsList.length; i++) {
    res.json(friendsList)
    // }

  });


  // API POST Requests
  // ---------------------------------------------------------------------------

  app.post('/api/friends', function(req, res) {

    console.log(req.body)
    friendsList.push(req.body)



  });

  // ---------------------------------------------------------------------------
  app.post('/api/clear', function(req, res) {
    // Empty out the arrays of data
    friendsList = [];
    console.log('friendsList cleared');
  });


}