export class ApplicationException extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
  }
}

export class UserFacingException extends ApplicationException {
  statusCode = 500;
  constructor(message: string = "Internal server error") {
    super(message);
  }
}

export class NotFoundException extends UserFacingException {
  statusCode = 404;
  constructor(message: string = "Not found") {
    super(message);
  }
}
export class UnauthorizedException extends UserFacingException {
  statusCode = 401;
  constructor(message: string = "Unauthorized") {
    super(message);
  }
}

export class ValidationException extends UserFacingException {
  statusCode = 400;
  constructor(message: string = "Validation error") {
    super(message);
  }
}

export class ForbiddenException extends UserFacingException {
  statusCode = 403;
  constructor(message: string = "Forbidden") {
    super(message);
  }
}
