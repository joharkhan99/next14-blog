import { register } from "@/lib/actions";
import React from "react";
import styles from "./registerForm.module.css";

const RegisterForm = () => {
  return (
    <form action={register} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
      />
      <button>Register</button>
    </form>
  );
};

export default RegisterForm;
