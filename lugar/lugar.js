const axios = require('axios');

const getLatLongCity = async(cityReq) => {

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(cityReq)}`,
        timeout: 30000,
        headers: { 'X-RapidAPI-Key': 'b40b7976efmshc567107b071bccbp1246a5jsnce6cd384a274' }
    });


    const resp = await instance.get();

    const data = resp.data.Results;

    if (data.length === 0) {
        throw new Error(`No hay resultados para ${cityReq}`);
    }

    const city = data[0].name;
    const lat = data[0].lat;
    const long = data[0].lon;

    return {
        city,
        lat,
        long
    }
}

module.exports = {
    getLatLongCity
}