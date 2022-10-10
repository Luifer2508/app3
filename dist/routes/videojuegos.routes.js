"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const videojuegos_model_1 = require("../models/videojuegos.model");
const gameRoutes = (0, express_1.Router)();
gameRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield videojuegos_model_1.Games.find();
    return res.json({
        ok: true,
        games
    });
}));
gameRoutes.get('/paging', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const games = yield videojuegos_model_1.Games.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        games
    });
}));
gameRoutes.post('/', (req, res) => {
    const body = req.body;
    const game = {
        nombre: body.nombre,
        desarrolladora: body.desarrolladora,
        plataforma: body.plataforma,
        genero: body.genero,
        imagen: body.imagen
    };
    videojuegos_model_1.Games.create(game).then(gameDb => {
        return res.json({
            ok: true,
            gameDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            err
        });
    });
});
gameRoutes.put('/:id', (req, res) => {
    const gameId = req.params.id;
    const body = req.body;
    const game = {
        nombre: body.nombre,
        desarrolladora: body.desarrolladora,
        plataforma: body.plataforma,
        genero: body.genero,
        imagen: body.imagen
    };
    videojuegos_model_1.Games.findByIdAndUpdate(gameId, game).then(gameDb => {
        return res.json({
            ok: true,
            gameDb
        });
    });
});
gameRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameId = req.query.id;
    if (!gameId) {
        return res.json({
            ok: false,
            msj: "el resgitro solicitado no existe"
        });
    }
    ;
    videojuegos_model_1.Games.findByIdAndDelete(gameId).then(game => {
        return res.json({
            ok: true,
            msj: "eliminado correctamente"
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "el resgitro solicitado no existe"
        });
    });
}));
exports.default = gameRoutes;
