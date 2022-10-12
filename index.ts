import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import gameRoutes from "./routes/videojuegos.routes";


const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}))

server.app.use('/', defaultRoutes);
server.app.use('/videojuegos', gameRoutes);

mongoose.connect('mongodb+srv://usr_videojuegos:videojuegos2022@cluster0.bseihec.mongodb.net/videojuegosDb',(error)=>{
    if(error){
        throw error;
    }
    console.log("Base de datos online");
})

server.Start(()=>{

    console.log(`Servidor corriendo en puerto: ${server.port}`);

})
