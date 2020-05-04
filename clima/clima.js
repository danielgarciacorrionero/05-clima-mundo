const axios = require('axios');

const getTemp = async(lat, lon) => {

    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURI(lat)}&lon=${encodeURI(lon)}&appid=04aa26a566efe9b4b6c997f30dbad23c&units=metric`,
        timeout: 30000
    });

    const resp = await instance.get();

    const data = resp.data;

    if (data.length === 0) {
        throw new Error(`No hay resultados para ${cityReq}`);
    }

    return data.main.temp;
}

module.exports = {
    getTemp
}