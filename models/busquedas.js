const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'Lima'];

    construnctor() {
        //TODO: leer DB si existe
    }

    async ciudad( lugar='' ) {

        try {
            //peticion http
            // console.log('ciudad', lugar);
            const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/Madrid.json?language=es&access_token=pk.eyJ1Ijoib3prMzAiLCJhIjoiY2t6ZG1yYWZrMno0dTMxdHZlZmFja3diMSJ9.DgU_JPeVLyo25mzpTzAK_A');
            console.log(resp.data);
    
            return []; // retornar lugares

        } catch (error) {
            return[];
        }
    }

}

module.exports = Busquedas;