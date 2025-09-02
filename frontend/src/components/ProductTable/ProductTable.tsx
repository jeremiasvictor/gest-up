import { useState, useEffect } from "react";
import api from "../../services/api";
import styles from "./ProductTable.module.css";
import { FaEllipsisV } from "react-icons/fa";

const mockProducts = [
  { id: 1, name: "Bolo de Pote de Morango", value: 12.5, quantity: 10 },
  { id: 2, name: "Café Especial em Grãos 250g", value: 35.0, quantity: 4 },
  { id: 3, name: "Caixa de Brownie (6 unidades)", value: 25.0, quantity: 0 },
  { id: 4, name: "Serviço de Entrega", value: 8.0, quantity: null },
];

function ProductTable() {
  const [products, setProducts] = useState(mockProducts);

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

  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Value</th>
          <th>Quantity</th>
          <th>Balance</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.id}</td>
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
            <td>
              <button className={styles.actionsButton}>
                <FaEllipsisV />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
