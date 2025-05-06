import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./components/Login/Login";
import Register from "./components/register/Register"; // Dodajte import za Register
import Admin from "./pages/Admin";
import User from "./pages/User";
import ProtectedRoute from "./services/ProtectedRoute";
import UserList from "./components/users/UserList";

const AppRoutes = () => {
<<<<<<< HEAD
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />{" "}
      {/* Dodajte rutu za Register */}
      <Route path="/admin" element={<Admin />} />
      {/* <Route path="/admin" element={<ProtectedRoute roles={['admin']}><Admin /></ProtectedRoute>} /> */}
      {/* <Route path="/users" element={<ProtectedRoute roles={['admin']}><UserList /></ProtectedRoute>} /> */}
      <Route path="/users" element={<UserList />} />
      <Route
        path="/user"
        element={
          <ProtectedRoute roles={["user"]}>
            <User />
          </ProtectedRoute>
        }
      />
      <Route path="/unauthorized" element={<div>Unauthorized</div>} />
    </Routes>
  );
};
=======
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} /> {/* Dodajte rutu za Register */}
            <Route path="/admin" element={<ProtectedRoute roles={['admin']}><Admin /></ProtectedRoute>} />
            {/* <Route path="/users" element={<ProtectedRoute roles={['admin']}><UserList /></ProtectedRoute>} /> */}
            <Route path="/users" element={<UserList />} />
            <Route path="/user" element={<ProtectedRoute roles={['user']}><User /></ProtectedRoute>} />
            <Route path="/unauthorized" element={<div>Unauthorized</div>} />
        </Routes>
    );
}
>>>>>>> ea00312d659f1f3be86c6abb8ab5a759d2d39b41

export default AppRoutes;
