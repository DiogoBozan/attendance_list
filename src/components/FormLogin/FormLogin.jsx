import { Link } from "react-router-dom";

function FormLogin() {
  return (
    <div>
      <p>Login</p>
      <input type="text" placeholder="User" />
      <input type="password" placeholder="Password" />
      <button type="button">Login</button>
      <div>
        <Link to="/register">REGISTO</Link>{" "}
      </div>
      <div>
        <Link to="/list">Attendance List</Link>{" "}
      </div>
    </div>
  );
}

export default FormLogin;
