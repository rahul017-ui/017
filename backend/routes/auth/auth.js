const express = require('express')
const passport = require('passport')
const router = express.Router()
const authController=require('./auth.controller')

router.get('/google', passport.authenticate('google', { scope: ['profile','email'] }))

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  authController.sendJWTToken
)

// router.get('/logout', (req, res) => {
//   req.logout()
//   res.redirect('/')
// })


router.get('/authenticate', passport.authenticate('jwt', { session: false }), authController.authenticate);
router.get('/logout', authController.logout);
// router.get('/logout', passport.authenticate('jwt', { session: false }), authController.logout);



module.exports = router;
