// models/userModel.js
import users from "../data/users.js";

export const findUserByEmailAndPassword = (email, password) => {
  return users.find(user => user.email === email && user.password === password);
};
