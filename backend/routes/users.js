const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/add').post((req, res) => {

  const username = req.body.username
  const password = req.body.password
  const NewUser = new Users({
    username,
    password,
  })
  console.log('In backend')
  NewUser.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;