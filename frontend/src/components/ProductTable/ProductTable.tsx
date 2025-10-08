import { useState, useEffect } from "react";
import api from "../../services/api";
import styles from "./ProductTable.module.css";
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
