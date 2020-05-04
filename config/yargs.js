const argv = require('yargs').options({
    city: {
        alias: 'c',
        desc: 'Ciudad de la que se quiere obtener el clima',
        demand: true
    }
}).help().argv;

module.exports = {
    argv
}