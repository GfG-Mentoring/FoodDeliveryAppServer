class UserNotFoundError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'UserNotFoundError';
  }
}

class UnAuthorizedError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'UnAuthorizedError';
  }
}

export { UserNotFoundError, UnAuthorizedError };
