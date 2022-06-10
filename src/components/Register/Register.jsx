import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <p>Register Page</p>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
      <button type="button">Register</button>
      <div>
        <Link to="/">Login</Link>{" "}
      </div>
    </div>
  );
}

export default Register;
