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
  const [menuPosition, setMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const handleMenuToggle = (productId: number, event: React.MouseEvent) => {
    const buttonRect = event.currentTarget.getBoundingClientRect();

    if (openMenuId === productId) {
      setOpenMenuId(null);
      setMenuPosition(null);
    } else {
      setOpenMenuId(productId);
      setMenuPosition({
        top: buttonRect.bottom + window.scrollY,
        left: buttonRect.right + window.scrollX - 20,
      });
    }
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
    <>
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
                  onClick={(e) => handleMenuToggle(product.id, e)}
                >
                  <FaEllipsisV />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {openMenuId && menuPosition && (
        <div
          className={styles.menuOverlay}
          onClick={() => {
            setOpenMenuId(null);
            setMenuPosition(null);
          }}
        >
          <div
            className={styles.menuWrapper}
            style={{
              position: "absolute",
              top: `${menuPosition.top}px`,
              left: `${menuPosition.left}px`,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <ActionsMenu
              onEdit={() => {
                if (onEditClick) {
                  const product = products.find((p) => p.id === openMenuId);
                  if (product) onEditClick(product);
                }
                setOpenMenuId(null);
                setMenuPosition(null);
              }}
              onDelete={() => {
                if (onDeleteClick) {
                  const product = products.find((p) => p.id === openMenuId);
                  if (product) onDeleteClick(product);
                }
                setOpenMenuId(null);
                setMenuPosition(null);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductTable;
