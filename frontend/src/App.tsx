import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import styles from "./App.module.css";

import Layout from "./components/Layout/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Stock from "./pages/Stock";
import Business from "./pages/Business";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#2c264a",
            color: "#fff8f0",
          },
        }}
      />

      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* protected routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/business" element={<Business />} />

          <Route path="/business/:businessId" element={<Layout />}>
            <Route path="stock" element={<Stock />} />
            <Route index element={<Navigate to="stock" replace />} />
          </Route>

          <Route path="/" element={<Navigate to="/business" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
