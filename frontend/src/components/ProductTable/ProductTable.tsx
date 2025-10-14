import { useState } from "react";
// import api from "../../services/api";
import styles from "./ProductTable.module.css";

import Modal from "../Modal/Modal";
import ActionsMenu from "../ActionsMenu/ActionsMenu";
import EditProductForm from "../EditProductForm/EditProductForm";

import { FaEllipsisV, FaSearchMinus } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  value: number;
  quantity: number | null;
}
interface ProductTableProps {
  products: Product[];
}

function ProductTable({ products }: ProductTableProps) {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  // buscar dados reais do back
  /*
  useEffect(() => {
    api.get('/produtos')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Erro ao buscar produtos!", error);
      });
  }, []);
  */

  const getStockStatusClass = (quantity: number | null) => {
    if (quantity === null) return styles.service;
    if (quantity === 0) return styles.noStock;
    if (quantity <= 5) return styles.lowStock;
    return styles.inStock;
  };

  const formatStock = (quantity: number | null) => {
    if (quantity === null) return "N/A";
    return `${quantity} un.`;
  };

  const handleMenuToggle = (productId: number) => {
    setOpenMenuId(openMenuId === productId ? null : productId);
  };

  const handleOpenDeleteModal = (product: any) => {
    setSelectedProduct(product);
    setDeleteModalOpen(true);
    setOpenMenuId(null);
  };

  const handleDelete = () => {
    //lógica para chamar a API e deletar
    setDeleteModalOpen(false);
  };

  const handleOpenEditModal = (product: any) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
    setOpenMenuId(null);
  };

  const handleUpdateProduct = (updatedProduct: any) => {
    // Aqui viria a chamada para a API (ex: api.put(`/produtos/${updatedProduct.id}`, updatedProduct))
    setEditModalOpen(false);
  };

  if (products.length === 0) {
    return (
      <div className={styles.emptyStateContainer}>
        <FaSearchMinus className={styles.emptyStateIcon} />
        <h2>Nenhum produto encontrado</h2>
      </div>
    );
  }

  return (
    <>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Value</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className={styles.productNameCell} title={product.name}>
                {product.name}
              </td>
              <td>{`$ ${
                product.value?.toFixed(2).replace(".", ",") || "0,00"
              }`}</td>
              <td>
                <span
                  className={`${styles.stockStatus} ${getStockStatusClass(
                    product.quantity
                  )}`}
                >
                  {formatStock(product.quantity)}
                </span>
              </td>
              <td className={styles.actionsCell}>
                <button
                  className={styles.actionsButton}
                  onClick={() => handleMenuToggle(product.id)}
                >
                  <FaEllipsisV />
                </button>

                {openMenuId === product.id && (
                  <ActionsMenu
                    onEdit={() => handleOpenEditModal(product)}
                    onDelete={() => handleOpenDeleteModal(product)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      >
        <div className={styles.deleteModal}>
          <h2>Confirmar Exclusão</h2>
          <p>
            Você tem certeza que deseja excluir
            <strong> {selectedProduct?.name}</strong>?
          </p>
          <div className={styles.deleteModalButtons}>
            <button
              onClick={() => setDeleteModalOpen(false)}
              className={styles.cancelButton}
            >
              Cancelar
            </button>
            <button onClick={handleDelete} className={styles.deleteButton}>
              Excluir
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={isEditModalOpen} onClose={() => setEditModalOpen(false)}>
        <div className={styles.editModal}>
          <h2>Editar Produto</h2>
          {selectedProduct && (
            <EditProductForm
              productToEdit={selectedProduct}
              onSave={handleUpdateProduct}
              onCancel={() => setEditModalOpen(false)}
            />
          )}
        </div>
      </Modal>
    </>
  );
}

export default ProductTable;
