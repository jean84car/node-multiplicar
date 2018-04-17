"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
const OPTS_MULTIPLICAR = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};
//comandos
exports.argv = yargs.command('listar', 'Imprime en consola la tabla de multiplicar.', OPTS_MULTIPLICAR)
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
