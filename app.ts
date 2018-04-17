import { argv } from "./config/yargs";
import { Multiplicar } from './src/ejercicios/tabla_multiplicar';
import colors from "colors";

//para obtener el comando que se envia
let comando:string = argv._[0];

if(!Number(argv.base)){
    throw (`La base debe ser un numero`);
}

//let multiplicar:Multiplicar= new Multiplicar();
switch(comando){
    case 'listar':
        if(!Number(argv.limite)){
            throw ("el limiete debe ser un numero");
        }
        Multiplicar.listar(argv.base, argv.limite);
        break;
    case 'crear':
        Multiplicar.multiplicar(argv.base, argv.limite)  
            .then((nombre) => {
                console.log(`Se creo el archivo`, `${ nombre }`.blue);
            }).catch(error => console.log(error));
        break;
}



    










