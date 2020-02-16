let log4js = require('log4js');

log4js.configure({
    appenders: {
        production: {
            type: 'dateFile',
            filename: 'demo.log'
        }
    },
    categories: {
        default: { appenders: [ 'production' ], level: 'all' }
    }
});

let logger = log4js.getLogger();

module.exports = logger;