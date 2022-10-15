import { Request, Response, Router } from "express";
import { Games } from "../models/videojuegos.model";

const gameRoutes = Router();

gameRoutes.get('/', async (req: Request, res: Response)=>{

    const games = await Games.find();

    return res.json({
        ok: true,
        games
    })
 
});

gameRoutes.get('/paging', async (req: Request, res: Response)=>{
    
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page-1;
    skip = skip*perPage;

    const games = await Games.find().skip(skip).limit(perPage);

    return res.json({
        ok:true,
        games
    })
});

gameRoutes.post('/',(req: Request, res: Response)=>{
    const body = req.body;
    const game = {
        nombre:body.nombre,
        desarrolladora:body.desarrolladora,
        plataforma:body.plataforma,
        genero:body.genero,
        imagen:body.imagen
    }

    Games.create(game).then(gameDb =>{
        return res.json({
            ok:true,
            gameDb
        })

    }).catch(err=>{
        return res.json({
            ok:false,
            err
        })
    })

});

gameRoutes.put('/:id', (req:Request, res:Response)=>{

    const gameId = req.params.id;

    const body = req.body;

    const game = {
        nombre:body.nombre,
        desarrolladora:body.desarrolladora,
        plataforma:body.plataforma,
        genero:body.genero,
        imagen:body.imagen
    }

    Games.findByIdAndUpdate(gameId, game).then(gameDb=>{
        return res.json({
            ok:true,
            gameDb
        })
    })
});

gameRoutes.delete('/', async (req:Request, res:Response)=>{

    const gameId = req.query.id;

    if(!gameId)
    {
        return res.json({
            ok:false,
            msj:"el resgitro solicitado no existe"
        })
    };


    Games.findByIdAndDelete(gameId).then(game=>{
        return res.json({
            ok:true,
            msj:"eliminado correctamente"
        })
    }).catch(err=>{
        return res.json({
            ok:false,
            msj:"el resgitro solicitado no existe"
        })
    })
})


export default gameRoutes;