import { useState } from 'react';

export const CreateAccountView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<null | string>(null);
  const [noMatchPassword, setNoMatchPassword] = useState(false);
  const [noMatchEmail, setNoMatchEmail] = useState(false);

  async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

  const createAccountHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // Felhantering
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    } else if (password !== confirmPassword) {
      setNoMatchPassword(true);
    } else if (email !== confirmEmail) {
      setNoMatchEmail(true);
    } else {
      const user = {
        name: name,
        email: email,
        password: password,
      };
      console.log('Form submitted');
      console.log(user);

      postData('http://localhost:3000/users', user).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
      });

      // Städ upp formuläret
      setTimeout(() => {
        setName('');
        setEmail('');
        setConfirmEmail('');
        setPassword('');
        setConfirmPassword('');
        setError(null);
      }, 2000);
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <h1>Create an account</h1>
        <form onSubmit={(event) => createAccountHandler(event)}>
          <label className="form-label">
            Name:
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
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
            Confirm Email:
            <input
              type="confirm-email"
              name="confirm-email"
              id="confirm-email"
              placeholder="Confirm Your email..."
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
            {noMatchEmail && <p className="error">Email does not match</p>}
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
          <label className="form-label">
            Confirm Password:
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Your password..."
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {noMatchPassword && (
              <p className="error">Password does not match</p>
            )}
          </label>
          <button className="btn-global">Create Account</button>
        </form>
      </div>
    </>
  );
};
