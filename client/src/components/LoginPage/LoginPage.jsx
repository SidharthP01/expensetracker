import React from "react";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div class="wrapper">
      <form action="">
        <h1>Login</h1>
        <div class="input-box">
          <input type="text" placeholder="Username/Email" required />
          <i class="bx bxs-user"></i>
        </div>

        <div class="input-box">
          <input type="password" placeholder="Password" required />
          <i class="bx bxs-lock-alt"></i>
        </div>

        <div class="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <a href="#">forgot password?</a>
        </div>

        <button type="submit" class="btn">
          Login
        </button>

        <div class="register-link">
          <p>
            Don't have an account? <a href="#">Sign In</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
