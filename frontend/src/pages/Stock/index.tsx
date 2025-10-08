import { Link } from "react-router-dom";
import styles from "./Stock.module.css";
import actionBarStyles from "../../components/ActionBar/ActionBar.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import ProductTable from "../../components/ProductTable/ProductTable";
import MainContentCard from "../../components/MainContentCard/MainContentCard";

import { FaPlus, FaSort, FaFilter } from "react-icons/fa";

function Stock() {
  return (
    <div className={styles.stockContainer}>
      <MainContentCard>
        <ActionBar
          title="My Products"
          primaryAction={
            <Link to="/stock/new" className={actionBarStyles.addButton}>
              <FaPlus />
              <span>New Product</span>
            </Link>
          }
          secondaryActions={
            <>
              {/* <button className={actionBarStyles.secondaryButton}>
                <FaSort />
                <span>Sort</span>
              </button> */}
              <button className={actionBarStyles.secondaryButton}>
                <FaFilter />
                <span>Filter</span>
              </button>
            </>
          }
        />

        <div className={styles.tableWrapper}>
          <ProductTable />
        </div>
      </MainContentCard>
    </div>
  );
}

export default Stock;
