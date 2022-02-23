import { useState } from 'react';

export const SignInView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<null | string>(null);

  const signInHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    } else {
      console.log('Email:' + email);
      console.log('Password:' + password);

      setTimeout(() => {
        setEmail('');
        setPassword('');
        setError(null);
      }, 2000);
    }
  };
  return (
    <>
      <div className="content-wrapper">
        <h1>Sign in</h1>
        <form onSubmit={(event) => signInHandler(event)}>
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-label">
            Password:
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Your password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
          </label>
          <button className="btn-global">Sign in</button>
        </form>
      </div>
    </>
  );
};
