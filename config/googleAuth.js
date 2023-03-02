module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret:  process.env.GOOGLE_SECRET_CLIENT_ID,
    callbackURL: 'http://localhost:8081/auth/google'
  }
};