"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
const mongoose_1 = require("mongoose");
const gameSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    desarrolladora: {
        type: String
    },
    plataforma: {
        type: String
    },
    genero: {
        type: String
    },
    imagen: {
        type: String,
        requiere: [true, 'La imagen es requerida']
    }
});
exports.game = (0, mongoose_1.model)('Videojuego', gameSchema);
