import { ValidationError } from "../errors/typesError.js";

export class Validation {


     /**
     * Valida el nombre de la película
     * @param {string} nombreAnime - Nombre de la película
     * @returns {string} - El nombre de la película si es válido
     * @throws {ValidationError} - Si el nombre no es válido
     */
    static nombreAnime(nombreAnime) {
        if (typeof nombreAnime !== 'string') {
            throw new ValidationError('El nombre del anime debe ser una cadena de texto.');
        }

        // Permite letras, números y espacios, pero ajusta para permitir guiones y apóstrofes
        const nombreRegex = /^[a-zA-ZáéíóúÁÉÓÍÚñÑüÜ0-9\s'\-]+$/;

        if (!nombreRegex.test(nombreAnime)) {
            throw new ValidationError('El nombre del anime debe contener solo letras, números, guiones, apóstrofes y espacios.');
        }

        return nombreAnime;
    }


     /**
     * Valida el nombre de la película
     * @param {string} generoAnime - Nombre de la película
     * @returns {string} - El nombre de la película si es válido
     * @throws {ValidationError} - Si el nombre no es válido
     */
    static generoAnime(generoAnime) {
        if (typeof generoAnime !== 'string') {
            throw new ValidationError('El género del anime debe ser una cadena de texto.');
        }

        // Permite letras y espacios, ajustado para permitir guiones y apóstrofes
        const generoRegex = /^[a-zA-ZáéíóúÁÉÓÍÚñÑüÜ\s'\-]+$/;
        if (!generoRegex.test(generoAnime)) {
            throw new ValidationError('El género del anime debe contener solo letras, guiones, apóstrofes y espacios.');
        }

        return generoAnime;
    }

     /**
     * Valida el nombre de la película
     * @param {string} anioAnime - Nombre de la película
     * @returns {string} - El nombre de la película si es válido
     * @throws {ValidationError} - Si el nombre no es válido
     */

    static anioAnime(anioAnime) {
        if (typeof anioAnime !== 'string') {
            throw new ValidationError('El año debe ser una cadena de texto.');
        }

        // Expresión regular para validar un año de cuatro dígitos
        const anioRegex = /^(19|20)\d{2}$/;

        if (!anioRegex.test(anioAnime)) {
            throw new ValidationError('El año debe ser un número válido de cuatro dígitos (e.g., "1997", "2024").');
        }

        // Convertir el año a número para validación de rango
        const anioNumero = parseInt(anioAnime, 10);
        const currentYear = new Date().getFullYear();
        if (anioNumero < 1970 || anioNumero > currentYear) {
            throw new ValidationError(`El año debe estar entre 1970 y el año actual (${currentYear}).`);
        }

        return anioAnime;
    }

     /**
     * Valida el nombre de la película
     * @param {string} autorAnime - Nombre de la película
     * @returns {string} - El nombre de la película si es válido
     * @throws {ValidationError} - Si el nombre no es válido
     */
    static autorAnime(autorAnime) {
        if (typeof autorAnime !== 'string') {
            throw new ValidationError('El autor del anime debe ser una cadena de texto.');
        }

        // Permite letras, apóstrofes, guiones y espacios
        const autorRegex = /^[a-zA-ZáéíóúÁÉÓÍÚñÑüÜ\s'\-]+$/;
        if (!autorRegex.test(autorAnime)) {
            throw new ValidationError('El autor del anime debe contener solo letras, apóstrofes, guiones y espacios.');
        }

        return autorAnime;
    }
}
