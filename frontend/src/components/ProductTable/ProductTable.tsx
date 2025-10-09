import { useState, useEffect } from "react";
import api from "../../services/api";
import styles from "./ProductTable.module.css";
import Modal from "../Modal/Modal";
import ActionsMenu from "../ActionsMenu/ActionsMenu";
import EditProductForm from "../EditProductForm/EditProductForm";
import { FaEllipsisV } from "react-icons/fa";

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

function ProductTable() {
  const [products, setProducts] = useState(mockProducts);

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
    if (quantity === null) return "N/A (Serviço)";
    return `${quantity} un.`;
  };

  //abrir/fechar o menu de ações de uma linha específica
  const handleMenuToggle = (productId: number) => {
    //se o menu clicado já estiver aberto, fecha, se não, abre
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
    console.log("Salvando produto atualizado:", updatedProduct);
    // Aqui viria a chamada para a API (ex: api.put(`/produtos/${updatedProduct.id}`, updatedProduct))
    setEditModalOpen(false);
  };

  return (
    <>
      <table className={styles.productTable}>
        <thead>
          <tr>
            <th>Name</th>
            {/* <th>ID</th> */}
            <th>Value</th>
            <th>Quantity</th>
            {/* <th>Balance</th> */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className={styles.productNameCell} title={product.name}>
                {product.name}
              </td>
              {/* <td>{product.id}</td> */}
              <td>{`R$ ${product.value.toFixed(2).replace(".", ",")}`}</td>
              <td>
                <span
                  className={`${styles.stockStatus} ${getStockStatusClass(
                    product.quantity
                  )}`}
                >
                  {formatStock(product.quantity)}
                </span>
              </td>
              <td></td>
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
