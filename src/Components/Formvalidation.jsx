export const Validation = (email, password) => {
  const validemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const validPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).{8,}$/.test(password);

  if (!validemail) {
    return "Invalid Email";
  }
  if (!validPassword) {
    ("Invalid Password");
  }
  return null;
};
