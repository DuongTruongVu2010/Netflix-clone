import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Watch from "./components/pages/WatchPage/Watch";
import Register from "./components/pages/RegisterPage/Register";
import Login from "./components/pages/LoginPage/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/register" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
