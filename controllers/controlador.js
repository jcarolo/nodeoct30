


// el controlador se encargara de administrar las peticiones y respuestas

const {request,response}=require('express')

//importar el servicio para poder usarlo

    
    const {insertarJugador}=require('../services/servicios.js')
    const {leerJugador}=require('../services/servicios.js')
    const {leerJugadores}=require('../services/servicios.js')
    const {modificarJugador}=require('../services/servicios.js')
    const {borrarJugador}=require('../services/servicios.js')
    

// cuales son operaciones que debe realizar mi servidor

//registrar un juegador
//buscar un juegador
//buscar todos los jugadores
//Editar un jugadores
//Eliminar un  jugador


 async function registrarJugador(peticion=request, respuesta=response){

// capturo los datos que llegan el en cuerpo  de la peticion
    let datosCliente=peticion.body;

    try{

        await insertarJugador(datosCliente)
        respuesta.status(200).json({

            estado:true,
            mensaje: "Éxito registrando el jugador"
        })

    }catch(error)
    {
        respuesta.status(400).json({
            estado:false,
            mensaje: "upssss..."+ error
    })
    }
 }


 async function buscarJugador(peticion=request, respuesta=response){

    let id=peticion.params.id

    try{

        let jugador= await leerJugador(id)
        respuesta.status(200).json({

            estado:true,
            datos:jugador
        })

    }catch(error)
    {
        respuesta.status(400).json({
            estado:false,
            mensaje: "upssss..."+ error
    })
    }

}

async function buscarJugadores(peticion=request, respuesta=response){

    try{

        let jugadores= await leerJugadores()
        respuesta.status(200).json({

            estado:true,
            datos:jugadores
        })

    }catch(error)
    {
        respuesta.status(400).json({
            estado:false,
            mensaje: "upssss..."+ error
    })
    }



    }

    async function editarJugador(peticion=request, respuesta=response){
    let datos=peticion.body
    let id=peticion.params.id


        try{

            await modificarJugador(id,datos)
            respuesta.status(200).json({

                estado:true,
                mensaje: "Éxito editado el jugador"
            })

        }catch(error)
        {
            respuesta.status(400).json({
                estado:false,
                mensaje: "upssss..."+ error
        })
}

    
}


async function eliminarJugador(peticion=request, respuesta=response){

   let id=peticion.params.id
   try{

    await borrarJugador(id,)
    respuesta.status(200).json({

        estado:true,
        mensaje: "Éxito eliminando el jugador"
    })

}catch(error)
{
    respuesta.status(400).json({
        estado:false,
        mensaje: "upssss..."+ error
})
}



}

module.exports={
    registrarJugador,
    buscarJugador,
    buscarJugadores, 
    editarJugador,
    eliminarJugador
}
