import { useState, useEffect } from "react";

import api from "../../services/api";
import "./style.css";

function Home() {
  const [users, setUsers] = useState<any[]>([]);

  async function getUsers() {
    const response = await api.get("/usuario");
    setUsers(response.data);
    console.log(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return <></>;
}

export default Home;
