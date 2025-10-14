import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

import Header from "../Header/Header";

function Layout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <div className={styles.appBody}>
        <main className={styles.mainContent}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
