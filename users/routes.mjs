import { Router } from 'express';
import * as authService from './authService.mjs';
import { formatResponse } from '../utils/formatResponse.mjs';
import { UnAuthorizedError, UserNotFoundError } from './auth.exceptions.mjs';

const authRouter = Router();

authRouter.post('/signup', async (req, res) => {
  try {
    const data = authService.signup({ ...req.body });

    res.send(
      formatResponse('Sign up successful.', {
        ...data,
      })
    );
  } catch (err) {
    res.status(400).send(formatResponse('Error occured', null, err.message));
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const data = await authService.login({ ...req.body });

    res.send(
      formatResponse('Login successful.', {
        ...data,
      })
    );
  } catch (err) {
    if (err instanceof UnAuthorizedError) {
      return res
        .status(401)
        .send(formatResponse('Error occured', null, err.message));
    }
    if (err instanceof UserNotFoundError) {
      return (
        res
          .status(404)
          //   send({ data: 'user not found' });
          .send(formatResponse('Error Occured', null, err.message))
      );
    }
    res.status(400).send(formatResponse('Error occured', null, err.message));
  }
});

export { authRouter };
