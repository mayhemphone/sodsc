// Require needed modules
let express = require('express')
let async = require('async')

// Declare an express router
let router = express.Router()

// Reference the models
let db = require('../models')
let cloudinary = require('cloudinary')
let multer = require('multer')

// Include our custom middleware to ensure that users are logged in
let adminLoggedIn = require('../middleware/adminLoggedIn')
let loggedIn = require('../middleware/loggedIn')

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY




// POST /orders - create a new merch item
router.post('/', function(req, res) {
  console.log(req.body)
  // create merch item
  db.orders.create({
    userId: req.body.userId,
    merchId: req.body.merchId,
    size: req.body.size,
    sleeves: req.body.sleeves,
    quantity: req.body.quantity,
    currentCart: req.body.currentCart
  })

  .then(function(merch) {
   
      // console.log('EVERYTHING is done. Now redirect or something')
      // res.render('merch/new')
    })

  .catch(function(error) {
    // console.log('Error in POST /merch', error)
    res.status(400).render('404')
  })
})


// Export the routes from this file
module.exports = router