import { Link } from "react-router-dom";
import styles from "./Stock.module.css";
import actionBarStyles from "../../components/ActionBar/ActionBar.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import ProductTable from "../../components/ProductTable/ProductTable";
import MainContentCard from "../../components/MainContentCard/MainContentCard";
import Modal from "../../components/Modal/Modal";
import api from "../../services/api";

import { FaPlus, FaSort, FaFilter } from "react-icons/fa";
import { useState, useEffect, useMemo } from "react";

const mockProducts = [
  { id: 1, name: "Bolo de Pote de Morango", value: 12.5, quantity: 10 },
  { id: 2, name: "Café Especial em Grãos 250g", value: 35.0, quantity: 4 },
  { id: 3, name: "Caixa de Brownie (6 unidades)", value: 25.0, quantity: 0 },
  { id: 4, name: "Serviço de Entrega", value: 8.0, quantity: null },
  { id: 5, name: "Sorvete de flocos", value: 95.0, quantity: 40 },
  {
    id: 6,
    name: "Milkshake Espacial de Morango com chocolate, nozes, paçoca e amendoim",
    value: 135.0,
    quantity: 2,
  },
  { id: 7, name: "Bolacha recheada", value: 2.0, quantity: 54 },
  { id: 8, name: "Empadão de frango", value: 17.0, quantity: 123 },
  { id: 9, name: "Tortilete", value: 33.0, quantity: 1000 },
];

function Stock() {
  //tirar o mockProducts quando conectar com o back
  const [allProducts, setAllProducts] = useState<any[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNewProductModalOpen, setNewProductModalOpen] = useState(false);
  //mudar pra true quando conectar com o back
  const [isLoading, setIsLoading] = useState(false);

  //descomentar quando conectar
  // useEffect(() => {
  //   api
  //     .get("/produtos") //verificar se a rota é essa
  //     .then((response) => {
  //       setAllProducts(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao buscar produtos!", error);
  //     });
  // }, []);

  //useMemo é pra filtragem só acontecer quando a lista ou o termo da busca mudarem
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return allProducts; //se a busca estiver vazia, retorna todos os produtos
    }

    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allProducts, searchTerm]);

  console.log("DADOS ENVIADOS PARA A TABELA:", filteredProducts);

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
            searchValue={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <div className={styles.tableWrapper}>
            {isLoading ? (
              <p>Carregando produtos...</p>
            ) : (
              <ProductTable products={filteredProducts} />
            )}
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
