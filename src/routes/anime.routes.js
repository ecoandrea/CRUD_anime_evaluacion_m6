import {Router} from 'express';
import { createNewAnime, deleteAnime, getAllAnime, getByIdAnime, getByNameAnime, updateAnime } from '../controllers/anime.controllers.js';

const router = Router();

router.post('/anime', createNewAnime );
router.get('/anime', getAllAnime);
router.get('/anime/id/:id', getByIdAnime);
router.get('/anime/nombre/:nombre', getByNameAnime);
router.put('/anime/:id', updateAnime);
router.delete('/anime/:id', deleteAnime);

export default router