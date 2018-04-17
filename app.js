"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = require("./config/yargs");
const tabla_multiplicar_1 = require("./src/ejercicios/tabla_multiplicar");
//para obtener el comando que se envia
let comando = yargs_1.argv._[0];
if (!Number(yargs_1.argv.base)) {
    throw (`La base debe ser un numero`);
}
//let multiplicar:Multiplicar= new Multiplicar();
switch (comando) {
    case 'listar':
        if (!Number(yargs_1.argv.limite)) {
            throw ("el limiete debe ser un numero");
        }
        tabla_multiplicar_1.Multiplicar.listar(yargs_1.argv.base, yargs_1.argv.limite);
        break;
    case 'crear':
        tabla_multiplicar_1.Multiplicar.multiplicar(yargs_1.argv.base, yargs_1.argv.limite)
            .then((nombre) => {
            console.log(`Se creo el archivo`, `${nombre}`.blue);
        }).catch(error => console.log(error));
        break;
}
