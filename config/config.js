const credentials = require('./credentials.js');
const {server, db, username, password, privateKey} = credentials;

const config = {
    development: {
        PORT: 3000,
        DB: `mongodb://${server}/${db}`,
        saltRounds: 10,
        authCookie: 'jwt-auth-cookie',
        privateKey,
    },
    production: {
        PORT: 80,
        DB: `mongodb+srv://${username}:${password}@${server}/${db}?retryWrites=true&w=majority`,
        saltRounds: 7,
        authCookie: 'jwt-auth-cookie',
        privateKey,
    }
}

module.exports = config[process.env.NODE_ENV.trim()];
