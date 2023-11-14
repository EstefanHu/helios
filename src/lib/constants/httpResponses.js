export const SUCCESS = JSON.stringify({ code: 200, message: 'request successful' });
export const CREATED = JSON.stringify({ code: 201, message: 'resource created' });
export const UPDATED = JSON.stringify({ code: 202, message: 'updated resource' });
export const NOT_AUTHENTICATED = JSON.stringify({ code: 307, message: 'session not found' });
export const BAD_REQUEST = JSON.stringify({ code: 400, message: 'bad request' });
export const INVALID_REQUEST = JSON.stringify({ code: 401, message: 'invalid request' });
export const CONFLICT = JSON.stringify({ code: 409, message: 'entry already exists' });
export const SERVER_ERROR = JSON.stringify({ code: 500, message: 'something went wrong. try again later' });
