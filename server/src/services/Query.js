export const checkEmailExists = "SELECT s FROM students s WHERE s.email = $1";

export const addUser =
  "INSERT INTO students (name, email, password) VALUES ($1, $2, $3)";
