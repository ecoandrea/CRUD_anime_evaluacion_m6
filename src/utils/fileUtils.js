import { JsonError, NotFoundError } from "../errors/typesError.js";
import { createFile, readFile } from "../services/fileService.js";


export const createDataFile = async (data, dataPath) => {
    try {
        const datafile = await readFile(dataPath);
        let dataJson = null
    
        !datafile || datafile.length === 0 ? (dataJson = [data]) : dataJson = [ ...datafile, data ]
    
        await createFile(dataJson, dataPath)
        
    } catch (error) {
        throw JsonError('Error al gestionar la creación del archivo con la data de anime', error)
    }
}

export const getAllData = async(pathData) => {
    try {
        const data = await readFile(pathData)
        return data
    } catch (error) {
        throw new NotFoundError('No pudimos acceder a los animes', error)
    }
}

export const updateData = async(id, newData, pathData) => {
    try {
        const data = await readFile(pathData);
        const indexData  = data.findIndex(dataFound => dataFound.id === id);

        if(indexData === -1) console.error('No pudimos actualizar el anime')
        
      
        const oldData = {...data[indexData]}
        
        data[indexData] = { id, ...newData };
        await createFile(data, pathData)

        return oldData

    } catch (error) {
        throw new JsonError('No pudimos actualizar el anime', error)
    }
}

export const deleteData = async(id, pathData) => {
    try {
        const data = await readFile(pathData);

        const indexData = data.findIndex( dataFound => dataFound.id === id );

        if(indexData === -1) throw new Error('No pudimos encontrar la data');

        const dataDelete = data[indexData]
        data.splice(indexData, 1)

        await createFile(data, pathData )

        return dataDelete
    } catch (error) {
        throw new JsonError('No pudimos actualizar la data', error);
    }
}

export const getAnimeById = async (id, pathData) => {
    try {
        const data = await readFile(pathData)
        const dataFound = data.find(dataFound => dataFound.id === id)

        return dataFound
    } catch (error) {
        throw new NotFoundError('No pudimos encontrar el anime por el id', error)
    }
}


export const getAnimeByName = async (nombre, pathData) => {
    try {
        const data = await readFile(pathData);

        const nameNormalized = nombre.toLocaleLowerCase().replace(/\s+/g, '')

        const anime = data.filter(
            (anime) =>
                anime.nombre.toLocaleLowerCase().replace(/\s+/g, '') === nameNormalized
        );
        return anime
    } catch (error) {
        throw new NotFoundError('No pudimos encontrar el anime por el nombre', error)
    }

} 



