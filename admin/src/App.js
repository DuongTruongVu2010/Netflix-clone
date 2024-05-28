import "./app.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/authContext/AuthContext";
import { useContext } from "react";
import ListList from "./pages/listList/ListList";
import List from "./pages/list/List";
import NewList from "./pages/newList/NewList";
function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        {user && (
          <Route
            path="*"
            element={
              <>
                <Topbar />
                <div className="container">
                  <Sidebar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/user/:userId" element={<User />} />
                    <Route path="/newUser" element={<NewUser />} />
                    <Route path="/movies" element={<ProductList />} />
                    <Route path="/movie/:movieId" element={<Product />} />
                    <Route path="/newMovie" element={<NewProduct />} />

                    <Route path="/lists" element={<ListList />} />
                    <Route path="/list/:listId" element={<List />} />

                    <Route path="/newlist" element={<NewList />} />
                  </Routes>
                </div>
              </>
            }
          />
        )}
      </Routes>
    </Router>
  );
}

export default App;
