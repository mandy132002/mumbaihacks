import user from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
const secret = 'test';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await user.findOne({ email });
    if (!existingUser)
      return res
        .status(404)
        .json({ error: "User doesn't exist. Please try again" });

    const validPassword = await bcrypt.compare(password, existingUser.password);
    if (!validPassword)
      return res.status(400).json({ error: 'Incorrect Password.' });

    const token = jwt.sign(
      {
        email: existingUser.email,
        role: existingUser.role,
        id: existingUser._id,
      },
      'test',
      { expiresIn: '1h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    return res.status(500).json({ error: 'Something went wrong' });
  }
};

export const signup = async (req, res) => {
  const { email, password, name, phoneNumber } = req.body;
  console.log(req.body);
  try {
    const oldUser = await user.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await user.create({
      phoneNumber,
      email,
      password: hashedPassword,
      name,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id, phoneNumber: result.phoneNumber },
      secret,
      { expiresIn: '1h' }
    );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
    console.log(error);
  }
};
