import { useState } from "react";

function Signup({ onSignup, onBackToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    onSignup();
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>ConnectAble</h1>
        <h2>Create account</h2>

        <p>Join inclusive communities, events and mentor support.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label htmlFor="signup-email">Email address</label>
          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="signup-password">Password</label>
          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Create Account</button>
        </form>

        <button
          type="button"
          className="text-button"
          onClick={onBackToLogin}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}

export default Signup;