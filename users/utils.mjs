import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//  both of these should be in environment file
const SALT_ROUND = 10;
const jwtSecret = 'askfnakfnk314k3n4k1kaf';

export const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(SALT_ROUND);
  return bcrypt.hashSync(password, salt);
};

export const comparePasswords = (password, hashPassword) => {
  return bcrypt.compareSync(password, hashPassword);
};

export const createJwt = (data) => {
  return jwt.sign(data, jwtSecret, {
    expiresIn: '1h',
  });
};

export const verifyJwt = (token) => {
  return jwt.verify(token, jwtSecret);
};

// console.log(createJwt({ a: 1, b: 2, c: 3 }));
