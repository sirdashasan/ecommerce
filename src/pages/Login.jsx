import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>Login</div>
      <Link to="/signup">Kayıt Ol</Link>
    </div>
  );
};

export default Login;
