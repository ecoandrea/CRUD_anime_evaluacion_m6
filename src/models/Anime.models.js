import { v4 as uuidv4 } from 'uuid';
import { createDataFile, deleteData, getAllData, updateData,getAnimeById, getAnimeByName } from '../utils/fileUtils.js';
import { Validation } from '../utils/Validation.js';
import { InternalServerError, ValidationError } from '../errors/typesError.js';

export class Anime {
 
  #id;
  #nombre;
  #genero;
  #anio;
  #autor;
 
  constructor(nombre, genero, anio, autor) {
    this.#id = uuidv4().slice(0, 8)
    this.#nombre = Validation.nombreAnime(nombre);
    this.#genero = Validation.generoAnime(genero);
    this.#anio = Validation.anioAnime(anio);
    this.#autor = Validation.autorAnime(autor);
  }
  
  // Getters
  get id() { return this.#id; }
  get nombre() { return this.#nombre; }
  get genero() { return this.#genero; }
  get anio() { return this.#anio; }
  get autor() { return this.#autor; }
  
  // Setters
  setId(newId) { this.#id = newId; }

  setNombre(newNombre) {
    try {
        Validation.nombre(newNombre)
        this.#nombre = newNombre;
    } catch (error) {
        throw new ValidationError(`Error al modificar nombre: ${error.message}`, error);
    }
     }
  setGenero(newGenero) { 
    try {
        Validation.genero(newGenero)
        this.#genero = newGenero;
    } catch (error) {
        throw new ValidationError(`Error al modificar genero: ${error.message}`, error);
    }
    }
  setAnio(newAnio) { 
    try {
        Validation.anio(newAnio)
        this.#anio = newAnio;
    } catch (error) {
        throw new ValidationError(`Error al modificar anio: ${error.message}`, error);
    }

   }
  setAutor(newAutor) { 
    try {
        Validation.autor(newAutor)
        this.#autor = newAutor;
    } catch (error) {
        throw new ValidationError(`Error al modificar autor: ${error.message}`, error);
    }
}

  // Method to get all properties
  getAllProperties() {
    return {
      id: this.#id,
      nombre: this.#nombre,
      genero: this.#genero,
      anio: this.#anio,
      autor: this.#autor,
    };
  }


  static async create(data) {
    try {
      const { nombre, genero, anio, autor } = data;
      const anime = new Anime(nombre, genero, anio, autor);
      const animeObject = anime.getAllProperties();
  
     
      await createDataFile(animeObject, 'animes.json');
  
      return animeObject;
    } catch (error) {
      throw new InternalServerError('Error al crear un nuevo anime', error);
    }
  }

  static async findAll() {
    try {
      const anime = await getAllData('animes.json')
      return anime
    } catch (error) {
      throw new InternalServerError('Error al obtener los datos del anime', error)
    }
  }

  static async update(id, data) {
    try {
      const actualizarAnime = await updateData(id, data, 'animes.json')
      return actualizarAnime
    } catch (error) {
      throw new InternalServerError('Error al actualizar el anime', error);
    }
  }

  static async delete(id) {
    try {
      const usuarioBorrar = await deleteData(id, 'animes.json');
      return usuarioBorrar
    } catch (error) {
      throw new InternalServerError('Falló al  eliminar el anime', error);
    }
  }

  static async findAnimeById(id) {
    try {
        const idAnime = await getAnimeById(id, 'animes.json')
        return idAnime
    } catch (error) {
        throw new InternalServerError("Error al obtener los datos del anime", error);
    }
}


static async findAnimeByName(nombre) {
    try {
        const nombreAnime = await getAnimeByName(nombre, 'animes.json')
        return nombreAnime
    } catch (error) {
        throw new InternalServerError("Error al obtener los datos del anime", error);
    }
}




}



