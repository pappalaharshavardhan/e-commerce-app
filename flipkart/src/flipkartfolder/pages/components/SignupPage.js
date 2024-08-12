
import React from 'react';

const SignupPage = () => {
  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <form>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
