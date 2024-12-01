import express from 'express';
import anime from './routes/anime.routes.js'


const app = express()
const PORT = 3000


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })) 


app.use('/api/v1', anime)  // esta es la ruta

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto 3000👽`)
})