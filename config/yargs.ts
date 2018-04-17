import * as yargs from "yargs";

const OPTS_MULTIPLICAR= {
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}; 

//comandos
export let argv = yargs.command('listar', 'Imprime en consola la tabla de multiplicar.', OPTS_MULTIPLICAR)
    .command('crear', 'Crea la tabla de multuplicar', OPTS_MULTIPLICAR)
    .option('base', {
        alias: 'b',
        describe: 'Tabla que se desea crear',
        demandOption: true
    }).help().argv;


//definimos parametro que debemos recibir al correr la aplicacion
/*
let argv= yargs.option('base', {
    alias: 'b',
    describe: 'Tabla que se desea crear',
    demandOption: true
}).help()
.argv;    
*/    