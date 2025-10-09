import { Link } from "react-router-dom";
import styles from "./Stock.module.css";
import actionBarStyles from "../../components/ActionBar/ActionBar.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import ProductTable from "../../components/ProductTable/ProductTable";
import MainContentCard from "../../components/MainContentCard/MainContentCard";
import Modal from "../../components/Modal/Modal";

import { FaPlus, FaSort, FaFilter } from "react-icons/fa";
import { useState } from "react";

function Stock() {
  const [isNewProductModalOpen, setNewProductModalOpen] = useState(false);

  const handleOpenNewProductModal = () => {
    setNewProductModalOpen(false);
  };

  const handleCreate = () => {
    //lógica para chamar a API e criar
  };

  return (
    <>
      <div className={styles.stockContainer}>
        <MainContentCard>
          <ActionBar
            title="My Products"
            primaryAction={
              <button
                className={actionBarStyles.addButton}
                onClick={() => setNewProductModalOpen(true)}
              >
                <FaPlus />
                <span>New Product</span>
              </button>
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

      <Modal
        isOpen={isNewProductModalOpen}
        onClose={() => setNewProductModalOpen(false)}
      >
        <h2>Novo produto</h2>

        <div className={styles.newProductModalInputs}>
          <input type="text" placeholder="Nome" />

          <input type="number" placeholder="Valor" />

          <input type="number" placeholder="Quantidade" />
        </div>

        <div className={styles.newProductModalButtons}>
          <button
            onClick={() => setNewProductModalOpen(false)}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
          <button onClick={handleCreate} className={styles.createButton}>
            Criar produto
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Stock;
