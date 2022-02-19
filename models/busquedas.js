const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa', 'Madrid', 'Lima'];

    construnctor() {
        //TODO: leer DB si existe
    }

    get paramsMapbox() {
        return {
            'language': 'es',
            'access_token': process.env.MAPBOX_KEY
        }
    }

    async ciudad( lugar='' ) {

        try {
            //Peticion http
            
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            console.log(resp.data);
    
            return []; // retornar lugares

        } catch (error) {
            return[];
        }
    }

}

module.exports = Busquedas;