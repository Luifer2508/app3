"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const server = new server_1.default();
server.app.use('/', default_routes_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/videojuegosDb', (error) => {
    if (error) {
        throw error;
    }
    console.log("Base de datos online");
});
server.Start(() => {
    console.log(`Servidor corriendo en puerto: ${server.port}`);
});
