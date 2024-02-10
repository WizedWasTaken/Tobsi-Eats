import mongoose from 'mongoose';
import { OrderSchema } from '../models/orderModel';
import bcrypt from 'bcrypt';

const Order = mongoose.model('User', OrderSchema);

/**
 * Function to create a new order.
 * @param {req} request
 * @param {result} result
 */
export const createOrder = async (req, res) => {
  try {
    if (findUserByUsername(req.body.user) === null) {
      res.status(400).json({ message: 'User not found' });
    }
    const order = new Order(req.body);
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const findUserByUsername = async (username) => {
  return await User.findOne({ username });
};
