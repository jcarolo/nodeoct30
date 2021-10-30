// importo el modelo de datos 

const { buscarJugadores } = require('../controllers/controlador.js')
const JugadorModelo= require('../models/JugadorModelo.js')

//servicion para agregar un documeto a la BASEDATOS

async function insertarJugador (datosJugador){
    let jugadorAInsertar= new JugadorModelo(datosJugador)
    
    return await jugadorAInsertar.save()
}


// Servicio busc documento en bd

async function leerJugador (id){
    
   let jugador = await JugadorModelo.findById(id)
   return jugador
}

// servicio prbucr todos los documentos

async function leerJugadores (){
    let jugadores = await JugadorModelo.find()    
    return jugadores
}


//servicio editar documento 

async function modificarJugador(id,datos){

return await JugadorModelo.findByIdAndUpdate(id,datos)


}

// servicio para eliminar documentos

async function borrarJugador(id){
    return await JugadorModelo.findByIdAndDelete(id)




}


module.exports={
    insertarJugador,
    leerJugador,
    leerJugadores,
    modificarJugador,
    borrarJugador
    

}