"use client";

import React, { useEffect } from "react";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { login } from "@/lib/actions";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();
  // useEffect(() => {
  //   state?.success && router.push("/login");
  // }, [state?.success, router]);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="password" name="password" />
      <button>Login</button>

      {state?.error && <p>{state.error}</p>}

      <Link href="/register">{"Don't have an account? Login"}</Link>
    </form>
  );
};

export default LoginForm;
