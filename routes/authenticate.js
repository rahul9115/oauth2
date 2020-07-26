const passport = require('passport');
const cors = require('cors')
module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google', {
        scope: ['email', 'profile']
    }))
    app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/surveys');

    });
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect('/');
    });
    app.get('/api/output', (req, res) => {
        res.send(req.user);
    });
    app.use(cors());


}