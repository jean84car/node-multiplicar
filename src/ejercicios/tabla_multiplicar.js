"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Archivos_1 = require("../utilidades/Archivos");
const colors_1 = __importDefault(require("colors"));
class Multiplicar {
    static listar(base, limite) {
        console.log(colors_1.default.green(`tabla del ${base}`));
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}`);
        }
    }
}
Multiplicar.multiplicar = (base, limite) => __awaiter(this, void 0, void 0, function* () {
    let datos = "";
    let nombreArchivo = `tablas/tabla${base}.txt`;
    for (let i = 1; i <= limite; i++) {
        datos += `${base} * ${i} = ${base * i}\n`;
    }
    return yield Archivos_1.Archivo.crearArchivo(nombreArchivo, datos)
        .catch(error => {
        throw error;
    });
});
exports.Multiplicar = Multiplicar;
