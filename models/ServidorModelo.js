const express = require('express')
const {conectarBD}=require('../database/conexion.js')
const cors = require('cors')

//Traer las rutas
const rutas=require('../routes/rutas.js')

class ServidorModelo {

    constructor(){

        this.app = express()
        this.despertarBD()
        this.llamarAuxiliares()        
        this.enrutarPeticion()

    }
    encederServidor(){

        this.app.listen(process.env.PORT,function(){
            console.log("servidor encendido..."+process.env.PORT)
        })        

    }

    enrutarPeticion(){

        this.app.use('/',rutas)

            }

    despertarBD(){
        conectarBD ()
    }

    //midd
     llamarAuxiliares(){
         this.app.use(express.json())
         this.app.use(cors())


     }

}

module.exports=ServidorModelo