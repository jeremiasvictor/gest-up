import { Routes, Route } from "react-router-dom";
import styles from "./App.module.css";

import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Stock from "./pages/Stock";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="stock" element={<Stock />} />
        {/* <Route path="sales" element={<Sales/>}/> */}
        {/* <Route path="clients" element={<Clients/>}/> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
