import express from 'express';
import anime from './routes/anime.routes.js'
import { errorHandler } from './middleware/errorHandler.js';
import { NotFoundError } from './errors/typesError.js';

const app = express()
const PORT = 3000


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })) 


app.use('/api/v1', anime)  
app.use((req, res, next) => next(new NotFoundError('Ruta no encontrada👎')))
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto 3000👽`)
})

export default app
