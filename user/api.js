// api.js
var GET_all_user =  require('./GET_all_user')
var GET_user = require('./GET_user')
var POST_user = require('./POST_user')
var PUT_user =  require('./PUT_user')

module.exports.init = function init (server, dbConnection){
  // api.js
  // inside init function

//GET ALL USER
  server.get('/api/user', function (req, res) {
      //call GET_all_user function in the GET_all_user.js
  	GET_all_user.GET_all_user(req, res, dbConnection)
  	console.log('info: done with GET_all_user.GET_all_user')

    })
//GET USER
    server.get('/api/user/:userId', function (req, res) {
        //call GET_all_user function in the GET_all_user.js
      GET_user.GET_user(req, res, dbConnection)
      console.log('info: done with GET_user.GET_user')


            })


            //POST USER

            //Create user
            //----------------
            server.post('/api/user', function (req, res) {
            	POST_user.POST_user(req, res, dbConnection)
            	console.log('info', 'done with POST_user.POST_user')
            })
            //---------------


            //Update user
            //---------------
            server.put('/api/user/:userId', function (req, res, next) {
            	PUT_user.PUT_user(req, res, dbConnection, next)
            	console.log('info', 'done with PUT_user.PUT_user')
            })
            //---------------


          }
