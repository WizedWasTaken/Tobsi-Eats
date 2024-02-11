import mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';

// Declare the model (Object)
const User = mongoose.model('User', UserSchema);

/**
 * Function to register an user.
 * @param {req} request
 * @param {res} result
 */
export const registerUser = async (req, res) => {
  try {
    const user = new User(req.body);
    if (!user) {
      return res.status(400).json({ error: 'Bruger blev ikke fundet.' });
    }
    if (!PasswordCheck(user.password)) {
      return res.status(400).json({ error: 'Kode ordet er ikke stærkt nok.' });
    }
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Brugernavn er allerede i brug.' });
    }

    res.status(500).json({ error: error.message });
  }
};

/**
 * Function to check if the password is strong enough.
 *
 * @param {password} password
 * @returns true if password is strong enough
 * @returns false if password is not strong enough
 */
const PasswordCheck = (password) => {
  if (password.length < 8) {
    return false;
  }
  if (password.search(/[a-z]/) < 0) {
    return false;
  }
  if (password.search(/[A-Z]/) < 0) {
    return false;
  }
  if (password.search(/[0-9]/) < 0) {
    return false;
  }
  return true;
};

/**
 *
 * Function to login an user, and check if the user is in the database.
 *
 * @returns 200 if user is found and password is correct
 * @returns 400 if user is not found or password is incorrect
 * @returns 500 if an error occurred
 * @param {req} request
 * @param {res} result
 */
export const loginUser = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res
        .status(400)
        .json({ error: 'Brugernavn og kodeord skal udfyldes.' });
    }

    const user = await User.findOne({
      username: req.body.username,
    });

    if (!user) {
      return res.status(400).json({ error: 'Bruger blev ikke fundet.' });
    }

    // Asynchronous function to compare the password (BCrypt)
    if (!(await user.isValidPassword(req.body.password))) {
      return res.status(400).json({ error: 'Forkert kodeord.' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
