import { UnAuthorizedError, UserNotFoundError } from './auth.exceptions.mjs';
import { User } from './user.model.mjs';
import { comparePasswords, createJwt, hashPassword } from './utils.mjs';

const signup = ({ fullName, email, password }) => {
  if (!fullName || !email || !password)
    throw Error('Either fullname, email or password is missing');

  if (password.length < 6) throw Error('Password is weak.');

  const user = new User();

  user.fullName = fullName;
  user.email = email.trim();
  //   user.profile
  user.password = hashPassword(password);

  user.save();
};

const login = async ({ email, password }) => {
  if (!email || !password) throw new Error('Email and password are required.');

  const [user] = await User.find({ email: email.trim() }).exec();

  if (!user) throw new UserNotFoundError('User not found.');

  if (!comparePasswords(password, user.password))
    throw new UnAuthorizedError('Incorrect password');

  const payload = {
    email: user.email,
    id: user._id,
    fullName: user.fullName,
  };

  const token = createJwt(payload);

  return { token, ...payload };
};

export { signup, login };
