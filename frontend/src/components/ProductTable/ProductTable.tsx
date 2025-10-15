import { useState } from "react";
import styles from "./ProductTable.module.css";

import ActionsMenu from "../ActionsMenu/ActionsMenu";

import { FaEllipsisV, FaSearchMinus } from "react-icons/fa";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number | null;
}
interface ProductTableProps {
  products: Product[];
  onEditClick?: (product: any) => void;
  onDeleteClick?: (product: any) => void;
}

function ProductTable({
  products,
  onEditClick,
  onDeleteClick,
}: ProductTableProps) {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);

  const handleMenuToggle = (productId: number) => {
    setOpenMenuId(openMenuId === productId ? null : productId);
  };

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

  if (products.length === 0) {
    return (
      <div className={styles.emptyStateContainer}>
        <FaSearchMinus className={styles.emptyStateIcon} />
        <h2>No products found</h2>
      </div>
    );
  }

  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
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
              product.price?.toFixed(2).replace(".", ",") || "0,00"
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
                  onEdit={() => {
                    if (onEditClick) {
                      onEditClick(product);
                    }
                    setOpenMenuId(null);
                  }}
                  onDelete={() => {
                    if (onDeleteClick) {
                      onDeleteClick(product);
                    }
                    setOpenMenuId(null);
                  }}
                />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
