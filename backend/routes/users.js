const router = require('express').Router();
let Users = require('../models/users.model');

router.route('/add').post((req, res) => {

  const username = req.body.username
  const password = req.body.password
  const NewUser = new Users({
    username,
    password,
  })
  console.log('Here')
  Users.countDocuments({ username: NewUser.username }, function (error, result) {
    if (result === 1) {
      res.json(result);
    }
    else {
      NewUser.save()
        .then(() => res.json(NewUser))
        .catch(error => res.status(400).json('Error: ' + error));
    }
  });
})

// router.route('/:id').get((req,res)=>{
//   const
// })

module.exports = router;