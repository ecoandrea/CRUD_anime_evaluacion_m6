import AppError from "./AppError.js";

export class ValidationError extends AppError {
  constructor(message, details) {
    super(message || "Error de Validación ☠️", 400, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message, details) {
    super(message || " No encontrado ❓", 404 , details);
  }
}

export class JsonError extends AppError {
  constructor(message, details) {
    super(message || "Error en el JSON de datos ❌", 500, details);
  }
}

export class InternalServerError extends AppError {
  constructor(message, details) {
    super(message || "Error interno del Servidor 💣", 404, details);
  }
}