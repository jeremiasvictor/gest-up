import styles from "./Stock.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import ProductTable from "../../components/ProductTable/ProductTable";
import MainContentCard from "../../components/MainContentCard/MainContentCard";

function Stock() {
  return (
    <div className={styles.stockContainer}>
      <MainContentCard>
        <ActionBar title="My products"></ActionBar>
        <div className={styles.tableWrapper}>
          <ProductTable />
        </div>
      </MainContentCard>
    </div>
  );
}

export default Stock;
