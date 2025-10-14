import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css";

import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Stock from "./pages/Stock";
import Companies from "./pages/Companies";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/companies" element={<Companies />} />

      <Route path="/companies/:companieId" element={<Layout />}>
        <Route path="stock" element={<Stock />} />
        <Route index element={<Navigate to="stock" replace />} />
      </Route>

      <Route path="/" element={<Navigate to="/companies" replace />} />
    </Routes>
  );
}

export default App;
