import bcrypt from "bcryptjs";
import { pool } from "../services/db.js";
import { StatusCodes } from "http-status-codes";
import { addUser, checkEmailExists } from "../services/Query.js";
import BadRequestError from "../errors/badRequest.js";

export const addNewUser = async (req, res) => {
  const { name, email, age, password } = req.body;
  // check if email exists
  const checkEmail = await pool.query(checkEmailExists, [email]);

  if (checkEmail.rows.length) {
    const salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    const user = await pool.query(addUser, [name, email, password]);
    return res
      .status(StatusCodes.CREATED)
      .json({ msg: "User Created Successfully", user: user.rows });
  } else {
    throw new BadRequestError("User  Already exits");
  }
};
