import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormLogin from "../components/FormLogin/FormLogin";
import ListName from "../components/ListName";
import Register from "../components/Register";

function NewRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormLogin />} />
      </Routes>
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path="/list" element={<ListName />} />
      </Routes>
    </Router>
  );
}

export default NewRoute;
