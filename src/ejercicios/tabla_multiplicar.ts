import { Archivo } from "../utilidades/Archivos";
import colors from "colors";

export class Multiplicar{

    public static multiplicar = async (base:number, limite:number) => {
        let datos:string="";
        let nombreArchivo:string=  `tablas/tabla${ base }.txt`;

        for (let i:number=1; i<=limite; i++){
            datos+= `${ base } * ${ i } = ${ base * i }\n`;
        }
        
        return await Archivo.crearArchivo(nombreArchivo, datos)
            .catch(error => {
                throw error; 
            });

    }

    public static listar(base:number, limite:number){
        console.log(colors.green(`tabla del ${ base }`));
        for(let i=1; i<=limite; i++){
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }
    }
}