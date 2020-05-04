const { argv } = require('./config/yargs');

const lugares = require('./lugar/lugar');

const clima = require('./clima/clima');


const getInfo = async(city) => {

    try {
        const coords = await lugares.getLatLongCity(city);
        const temp = await clima.getTemp(coords.lat, coords.long);
        console.log(`La temperatura de '${coords.city}' actualmente es de: ${temp}º C`);
    } catch (e) {
        console.log(`Error consultando el clima de ${city}`, e);
    }

};

getInfo(argv.city);