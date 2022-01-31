const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer")




const main = async() => {

    let opt;
    
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const desc = await leerInput('Descripcion:');
                console.log('Escribiste:', desc);
                break;
        };

        // pausa() hace que el usuario tenga que presionar enter para continuar
        if ( opt !== 0 ) await pausa();

    } while (opt !== 0);

}

main();