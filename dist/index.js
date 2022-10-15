"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./classes/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const videojuegos_routes_1 = __importDefault(require("./routes/videojuegos.routes"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const server = new server_1.default();
app.use(express_1.default.json());
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', default_routes_1.default);
server.app.use('/videojuegos', videojuegos_routes_1.default);
app.use((0, cors_1.default)({
    origin: 'https://backend-videojuegos.herokuapp.com/videojuegos',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}));
server.app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});
mongoose_1.default.connect('mongodb+srv://usr_videojuegos:videojuegos2022@cluster0.bseihec.mongodb.net/videojuegosDb', (error) => {
    if (error) {
        throw error;
    }
    console.log("Base de datos online");
});
server.Start(() => {
    console.log(`Servidor corriendo en puerto: ${server.port}`);
});
