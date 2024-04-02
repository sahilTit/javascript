import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Layout from "./Layout";
import SignupPage from "./pages/SignupPage";
import RequireAuth from "./pages/RequireAuth";
import { AuthProvider } from "./context/Context";
import AdminNav from "./admin/AdminNav";
import Unauthorized from "./pages/Unauthorized";
import Profile from "./pages/Profile";
// import { AppProvider } from "./context/Context";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />
      <Route path="signup" element={<SignupPage />} />
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="login" exact element={<LoginPage />} />
      <Route path="/about" element={<About />} />

      <Route element={<RequireAuth />}>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<AdminNav />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />{" "}
    </AuthProvider>
  </React.StrictMode>
);
