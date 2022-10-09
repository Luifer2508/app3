import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";


const server = new Server();

server.app.use('/', defaultRoutes);

mongoose.connect('mongodb://localhost:27017/videojuegosDb',(error)=>{
    if(error){
        throw error;
    }
    console.log("Base de datos online");
})

server.Start(()=>{

    console.log(`Servidor corriendo en puerto: ${server.port}`);

})
