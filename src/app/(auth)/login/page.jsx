import { handleGithubLogin, login } from "@/lib/actions";
async function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>Log in to your account to continue</p>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>

      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        <button>Login With Credentials</button>
      </form>
    </div>
  );
}

export default LoginPage;
