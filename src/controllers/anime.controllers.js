import { NotFoundError } from "../errors/typesError.js";
import { Anime } from "../models/Anime.models.js";

export const createNewAnime = async (req, res, next) => {
    try {
        const data = req.body
        const anime = await Anime.create(data);

        res.status(201).json({
            message: 'Animé creado con éxito',
            status: 201,
            data: anime
        })
    } catch (error) {
      next(error)
    }
}

export const getAllAnime = async (req, res, next) => {
    try {
        const data = await Anime.findAll();

        if (!data) throw new NotFoundError('No existen los animes, no se encontraron los animes solictadoes en la ruta correspondiente')

        res.status(200).json({
            message: 'Animes Encontrados!',
            status: 200,
            data
        })
    } catch (error) {
        next(error)
    }
}

export const updateAnime = async (req, res, next) => {
    try {
        const { id } = req.params
        const dataAnime = req.body

        const actualizarAnime = await Anime.update(id, dataAnime)

        res.status(200).json({
            message: 'Anime Actualizado',
            status: 201,
            oldData: actualizarAnime,
            newData: dataAnime
        })
    } catch (error) {
        next(error)
    }
}


export const deleteAnime = async (req, res, next) => {
    try {
        const { id } = req.params

        const usuarioBorrar = await Anime.delete(id)

        res.status(200).json({
            message: `Usuario con id ${id} eliminado con éxito`,
            status: 200,
            dataDeleted: usuarioBorrar
        })
    } catch (error) {
        next(error)
    }
}


export const getByIdAnime = async (req, res, next) => {

    try {
        const { id } = req.params;
        const data = await Anime.findAnimeById(id);

        if (!data)
            throw new Error(`No encontramos animé por id: ${id}`);

        res.status(200).json({
            messsage: "Animé encontrada pot ID",
            status: 200,
            data,
        });
    } catch (error) {
        next(error)
    }
};


export const getByNameAnime = async (req, res, next) => {

    try {

        const { nombre } = req.params;
        const anime = await Anime.findAnimeByName(nombre);

        res.status(200).json({
            message: "Animé obtenido por nombre  con éxito",
            status: 200,
            data: anime,
        });

    } catch (error) {
        next(error)
    }

};