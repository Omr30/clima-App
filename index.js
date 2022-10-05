require('dotenv').config();

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");




const main = async() => {

    const busquedas = new Busquedas();
    let opt;
    
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                // Mostrar mensaje
                const termino = await leerInput('Ciudad: ');

                // Buscar los lugares
                const lugares = await busquedas.ciudad( termino );
                
                // Seleccionar el lugar
                const id = await listarLugares( lugares );
                const {nombre, lat, lng} = lugares.find( l => l.id === id );

                // Clima
                const clima = await busquedas.climaLugar( lat, lng );

                // Mostrar resultados
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad:', nombre);
                console.log('Lat:', lat);
                console.log('Lng:', lng);
                console.log('Temperatura:', clima.temp);
                console.log('Minima:', clima.min);
                console.log('Maxima:', clima.max);
                console.log('Como está el clima:', clima.desc);
                break;
        };

        // pausa() hace que el usuario tenga que presionar enter para continuar
        if ( opt !== 0 ) await pausa();

    } while (opt !== 0);

}

main();