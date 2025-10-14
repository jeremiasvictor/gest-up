import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import styles from "./Stock.module.css";

// import api from "../../services/api";
import actionBarStyles from "../../components/ActionBar/ActionBar.module.css";
import ActionBar from "../../components/ActionBar/ActionBar";
import ProductTable from "../../components/ProductTable/ProductTable";
import MainContentCard from "../../components/MainContentCard/MainContentCard";
import Modal from "../../components/Modal/Modal";

import { FaPlus, FaFilter } from "react-icons/fa";

const mockProducts = [
  { id: 1, name: "Strawberry Pot Cake", value: 12.5, quantity: 10 },
  { id: 2, name: "Specialty Coffee Beans 250g", value: 35.0, quantity: 4 },
  { id: 3, name: "Box of Brownies (6 units)", value: 25.0, quantity: 0 },
  { id: 4, name: "Delivery Service", value: 8.0, quantity: null },
  { id: 5, name: "Flakes Ice Cream", value: 95.0, quantity: 40 },
  {
    id: 6,
    name: "Cosmic Milkshake with Strawberry, chocolate, walnuts, paçoca and peanuts",
    value: 135.0,
    quantity: 2,
  },
  { id: 7, name: "Stuffed Wafer", value: 2.0, quantity: 54 },
  { id: 8, name: "Chicken Pie", value: 17.0, quantity: 123 },
  { id: 9, name: "Tartlet", value: 33.0, quantity: 1000 },
];

function Stock() {
  //useParams is a hook that extract dynamic parameters from the URL
  const { companieId } = useParams();
  //remove mockProducts when connect api
  const [allProducts, setAllProducts] = useState<any[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [isNewProductModalOpen, setNewProductModalOpen] = useState(false);
  //change to true when connect api
  const [isLoading, setIsLoading] = useState(false);

  //uncomment when connect api
  // useEffect(() => {
  //   if (companieId) {
  //     setIsLoading(true);
  //     api.get(`/companies/${companieId}/products`)
  //       .then(response => {
  //         setAllProducts(response.data);
  //       })
  //       .catch(error => {
  //         console.error("Error searching for products", error);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // }, [companieId]);

  //useMemo is for filtering only when the list or search term changes
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return allProducts; //if the search is empty return all products
    }

    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allProducts, searchTerm]);

  const handleOpenNewProductModal = () => {
    setNewProductModalOpen(false);
  };

  const handleCreate = () => {
    //logic to call API and create
  };

  return (
    <>
      <div className={styles.stockContainer}>
        <MainContentCard>
          <ActionBar
            title={`Products of ${companieId}`}
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
              <p>Loading products...</p>
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
        <h2>New product</h2>

        <div className={styles.newProductModalInputs}>
          <input type="text" placeholder="Name" />

          <input type="number" placeholder="Value" />

          <input type="number" placeholder="Quantity" />
        </div>

        <div className={styles.newProductModalButtons}>
          <button
            onClick={() => setNewProductModalOpen(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button onClick={handleCreate} className={styles.createButton}>
            Create product
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Stock;
