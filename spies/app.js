const db = require('./db');

module.exports.handleSignup = (email, password) => {
    // check if the email already exists
        db.saveUser({email, password});
    // save the user to the database
    // send the welcome email
}