import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <div className={styles.appBody}>
        <Sidebar />
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
