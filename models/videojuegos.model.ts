import {  Document, model, Schema } from "mongoose";

const gameSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    desarrolladora: {
        type : String
    },
    plataforma: {
        type : String
    },
    genero: {
        type : String
    },
    imagen: {
        type: String,
        requiere: [true, 'La imagen es requerida']
    }
});

interface Igame extends Document{
    nombre:string;
    desarrolladora:string;
    plataforma:string;
    genero:string;
    imagen:string;
}


export const Games = model<Igame>('Videojuego', gameSchema)