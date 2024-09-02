import Users from '../models/Users.js';

export const createUser = async (req, res) => {
  try {
    const response = await Users.create(req.body);
    res.status(201).json({ status: true, message: 'success', data: response });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();
    res.status(201).json({ status: true, message: 'success', data: users });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.user_id);

    res.status(200).json({ status: true, message: 'success', data: user });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(
      req.params.user_id,
      req.body,
      {
        new: true,
      }
    );
    res
      .status(200)
      .json({ status: true, message: 'success', data: updatedUser });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const deleteUserById = async (userId) => {
  const deletedUser = await Users.findByIdAndDelete(userId);
  return { data: deletedUser };
};
