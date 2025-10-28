import { useParams } from "react-router-dom";
import { useState, useEffect, useMemo } from "react";
import styles from "./Stock.module.css";
import actionBarStyles from "../../components/ActionBar/ActionBar.module.css";

import api from "../../services/api";
import ActionBar from "../../components/ActionBar/ActionBar";
import ProductTable from "../../components/ProductTable/ProductTable";
import MainContentCard from "../../components/MainContentCard/MainContentCard";
import Modal from "../../components/Modal/Modal";
import EditProductForm from "../../components/EditProductForm/EditProductForm";

import { FaPlus, FaFilter } from "react-icons/fa";

function Stock() {
  //useParams is a hook that extract dynamic parameters from the URL
  const { businessId } = useParams();

  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  //change to true when connect api
  const [isLoading, setIsLoading] = useState(true);

  const [isNewModalOpen, setNewModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const [newProductData, setNewProductData] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (businessId) {
      setIsLoading(true);
      api
        .get(`/product/${businessId}`)
        .then((response) => {
          setAllProducts(response.data);
        })
        .catch((error) => {
          console.error("Error searching for products", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [businessId]);

  //useMemo is for filtering only when the list or search term changes
  const filteredProducts = useMemo(() => {
    if (!searchTerm) return allProducts;
    return (allProducts ?? []).filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allProducts, searchTerm]);

  const handleNewProductFormChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNewProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateProduct = async () => {
    try {
      const dataToSend = {
        name: newProductData.name,
        price: parseFloat(newProductData.price) || 0,
        quantity: parseInt(newProductData.quantity) || 0,
        business_id: businessId,
      };

      const response = await api.post("/product", dataToSend);
      setAllProducts((currentProducts) => [...currentProducts, response.data]);
      setNewModalOpen(false);
      setNewProductData({ name: "", price: "", quantity: "" });
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  const handleUpdateProduct = async (updatedProductData: any) => {
    try {
      const response = await api.post(
        "/product/updateProduct",
        updatedProductData
      );
      setAllProducts((currentProducts) =>
        currentProducts.map((p) =>
          p.id === selectedProduct.id ? response.data : p
        )
      );
      setEditModalOpen(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDeleteProduct = async () => {
    if (!selectedProduct) return;
    try {
      await api.delete("/product", {
        data: {
          productId: selectedProduct.id,
        },
      });

      setAllProducts((currentProducts) =>
        currentProducts.filter((p) => p.id !== selectedProduct.id)
      );
      setDeleteModalOpen(false);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openEditModal = (product: any) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
  };

  const openDeleteModal = (product: any) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
  };

  return (
    <>
      <div className={styles.stockContainer}>
        <MainContentCard>
          <ActionBar
            title={`My products`}
            primaryAction={
              <button
                className={actionBarStyles.addButton}
                onClick={() => setNewModalOpen(true)}
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
              <ProductTable
                products={filteredProducts ?? []}
                onEditClick={openEditModal}
                onDeleteClick={openDeleteModal}
              />
            )}
          </div>
        </MainContentCard>
      </div>

      <Modal
        isOpen={isNewModalOpen}
        onClose={() => setNewModalOpen(false)}
        closeOnBackdropClick={false}
      >
        <h2>New product</h2>

        <div className={styles.newProductModalInputs}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newProductData.name}
            onChange={handleNewProductFormChange}
          />

          <input
            type="number"
            placeholder="Price"
            name="price"
            value={newProductData.price}
            onChange={handleNewProductFormChange}
          />

          <input
            type="number"
            placeholder="Quantity"
            name="quantity"
            value={newProductData.quantity}
            onChange={handleNewProductFormChange}
          />
        </div>

        <div className={styles.newProductModalButtons}>
          <button
            onClick={() => setNewModalOpen(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button onClick={handleCreateProduct} className={styles.createButton}>
            Create product
          </button>
        </div>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        closeOnBackdropClick={false}
      >
        <h2>Edit Product</h2>
        {selectedProduct && (
          <EditProductForm
            productToEdit={selectedProduct}
            onSave={handleUpdateProduct}
            onCancel={() => setEditModalOpen(false)}
          />
        )}
      </Modal>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      >
        <h2>Confirm deletion</h2>
        <p className={styles.deleteModalP}>
          Are you sure you want to delete{" "}
          <strong>{selectedProduct?.name}</strong>?
        </p>
        <div className={styles.deleteModalButtons}>
          <button
            onClick={() => setDeleteModalOpen(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
          <button onClick={handleDeleteProduct} className={styles.deleteButton}>
            Delete
          </button>
        </div>
      </Modal>
    </>
  );
}

export default Stock;
