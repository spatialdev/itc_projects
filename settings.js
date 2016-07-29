/**
 * This is the settings file for
 * the DB.
 */

module.exports = {
    // Postgres Database Connection
    //pg: {
    //    server: 'localhost',
    //    port: '5432',
    //    database: 'db_name',
    //    user: 'user',
    //    password: 'password'
    //},
    port: 5000,
    authentication:false,
    auth:{ secret:'keyboard cat', expiration: 60000 * 60 },
    google: {
        clientID: '42534465235-k1ibmqdadcmu13e5ohom4ll7tnce16j7.apps.googleusercontent.com',
        clientSecret: 'PQ1Wru8TfhsVaIm0PZiWB0nb',
        callbackURL: "http://127.0.0.1:4000/api/auth/github/callback"
    },
    github: {
        clientID: 'f541fac2bd6a1c27d4cf',
        clientSecret: 'b7d2c89cb140c64b7455fbf9825ca77b057e12df',
        callbackURL: "http://127.0.0.1:4000/api/auth/github/callback"
    },
    linkedin: {
        clientID: 'get_your_own',
        clientSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:4000/api/auth/linkedin/callback"
    },
    twitter: {
        consumerKey: 'get_your_own',
        consumerSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:4000/api/auth/twitter/callback"
    }
};