import LoginForm from "@/components/loginForm/loginForm";
import { handleGithubLogin } from "@/lib/actions";
import styles from "./login.module.css";

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Login</h1>
        <p>Log in to your account to continue</p>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with GitHub</button>
        </form>

        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
