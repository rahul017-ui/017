const jwt = require('jsonwebtoken');
const devConfig = require('../../config/development');


module.exports = {
  sendJWTToken(req, res) {
    const token = jwt.sign({ id: req.body.currentUser }, devConfig.secret, {
      expiresIn: '1d',
    });
    res.redirect(`${devConfig.frontendURL}/fileupload/?token=${token}`);
  },
  authenticate(req, res) {
    return res.send(true);
  },
  logout(req, res) {
    req.logout(); // remove the session and remove req.currentUser;
    return res.json({ success: true });
  },
};
