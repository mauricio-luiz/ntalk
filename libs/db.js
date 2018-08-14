const moongose = require('mongoose');
const bluebird = require('bluebird');
const currentEnv = process.env.NODE_ENV || 'development';
const envURL = {
    test : 'mongodb://localhost:27017/ntalk_test',
    development : 'mongodb://localhost:27017/ntalk'
}
moongose.Promise = bluebird;
module.exports = moongose.connect(envURL[currentEnv]);