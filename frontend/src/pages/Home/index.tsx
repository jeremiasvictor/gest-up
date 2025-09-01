import { useState, useEffect } from "react";

import api from "../../services/api";
import styles from "./Home.module.css";

function Home() {
  const [users, setUsers] = useState<any[]>([]);

  async function getUsers() {
    try {
      const response = await api.get("/usuario");
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Página Principal (Home)</h1>
    </div>
  );
}

export default Home;
