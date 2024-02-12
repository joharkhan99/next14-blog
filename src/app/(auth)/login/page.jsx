import { handleGithubLogin } from "@/lib/actions";
async function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>Log in to your account to continue</p>
      <form action={handleGithubLogin}>
        <button>Login with GitHub</button>
      </form>
    </div>
  );
}

export default LoginPage;
