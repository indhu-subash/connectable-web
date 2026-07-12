import { useState } from "react";

function Login({ onLogin, onGoToSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      alert("Please enter email and password.");
      return;
    }

    onLogin();
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>ConnectAble</h1>
        <h2>Welcome back</h2>

        <p>
          Sign in to connect with communities, mentors and accessible events.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <button
          type="button"
          className="text-button"
          onClick={onGoToSignup}
        >
          New to ConnectAble? Create an account
        </button>
      </div>
    </div>
  );
}

export default Login;