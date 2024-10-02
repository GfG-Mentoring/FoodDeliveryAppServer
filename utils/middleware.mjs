import { UnAuthorizedError } from '../users/auth.exceptions.mjs';
import { verifyJwt } from '../users/utils.mjs';
import { formatResponse } from './formatResponse.mjs';

const verifyUser = (req, res, next) => {
  try {
    const jwtToken = req.headers.authorization;
    if (!jwtToken) throw new UnAuthorizedError('User is not authorized.');
    // this will throw expiry error
    // console.log(jwtToken);
    const token = jwtToken.replaceAll('Bearer ', '');
    // console.log(token);
    const data = verifyJwt(token);

    req.user = { ...data, id: data.id };

    // this will delegate the request to the next handler
    next();
  } catch (err) {
    console.error(err);
    return res
      .status(401)
      .send(
        formatResponse(
          'Your session expired. Please login again',
          null,
          err.message
        )
      );
  }
};

export { verifyUser };
