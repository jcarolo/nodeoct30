// se trae la 

const{Router} =require('express')
//importo los controladores
const{registrarJugador}=require('../controllers/controlador.js')
const{buscarJugador}=require('../controllers/controlador.js')
const{buscarJugadores}=require('../controllers/controlador.js')
const{editarJugador}=require('../controllers/controlador.js')
const{eliminarJugador}=require('../controllers/controlador.js')


// una variables que personaliza mis rutas

const rutas=Router()
//rutas api

rutas.get('/avanzada/v1/jugadores',buscarJugadores)
rutas.get('/avanzada/v1/jugadores/:id', buscarJugador)
rutas.post('/avanzada/v1/jugadores',registrarJugador)
rutas.put('/avanzada/v1/jugadores/:id',editarJugador)  
rutas.delete('/avanzada/v1/jugadores/:id',eliminarJugador)

module.exports=rutas