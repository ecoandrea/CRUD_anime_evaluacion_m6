import { v4 as uuidv4 } from 'uuid';
import { createDataFile, deleteData, getAllData, updateData,getAnimeById, getAnimeByName } from '../utils/fileUtils.js';


export class Anime {
 
  #id;
  #nombre;
  #genero;
  #anio;
  #autor;
 
  constructor(nombre, genero, anio, autor) {
    this.#id = uuidv4().slice(0, 8)
    this.#nombre = nombre;
    this.#genero = genero;
    this.#anio = anio;
    this.#autor = autor;
  }
  
  // Getters
  get id() { return this.#id; }
  get nombre() { return this.#nombre; }
  get genero() { return this.#genero; }
  get anio() { return this.#anio; }
  get autor() { return this.#autor; }
  
  // Setters
  setId(newId) { this.#id = newId; }
  setNombre(nombre) { this.#nombre = nombre; }
  setGenero(genero) { this.#genero = genero; }
  setAnio(anio) { this.#anio = anio; }
  setAutor(autor) { this.#autor = autor; }

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

  // Static method to create an Anime instance
  static async create(data) {
    try {
      const { nombre, genero, anio, autor } = data;
      const anime = new Anime(nombre, genero, anio, autor);
      const animeObject = anime.getAllProperties();
  
      // Assuming createDataFile is a function to save data to a file
      await createDataFile(animeObject, 'animes.json');
  
      return animeObject;
    } catch (error) {
      throw new Error('Falló al crear un nuevo animé', error);
    }
  }

  static async findAll() {
    try {
      const anime = await getAllData('animes.json')
      return anime
    } catch (error) {
      throw new Error('Error al obtener los datos del animé', error)
    }
  }

  static async update(id, data) {
    try {
      const actualizarAnime = await updateData(id, data, 'animes.json')
      return actualizarAnime
    } catch (error) {
      throw new Error('Fallo al actualizar el anime', error);
    }
  }

  static async delete(id) {
    try {
      const usuarioBorrar = await deleteData(id, 'animes.json');
      return usuarioBorrar
    } catch (error) {
      throw new Error('Falló al  eliminar el animé', error);
    }
  }

  static async findAnimeById(id) {
    try {
        const idAnime = await getAnimeById(id, 'animes.json')
        return idAnime
    } catch (error) {
        throw new Error("Error al obtener los datos del animé", error);
    }
}


static async findAnimeByName(nombre) {
    try {
        const nombreAnime = await getAnimeByName(nombre, 'animes.json')
        return nombreAnime
    } catch (error) {
        throw new Error("Error al obtener los datos del animé", error);
    }
}




}



