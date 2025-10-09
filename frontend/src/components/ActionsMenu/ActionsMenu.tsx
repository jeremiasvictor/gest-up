import styles from "./ActionsMenu.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

interface ActionsMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

function ActionsMenu({ onEdit, onDelete }: ActionsMenuProps) {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuList}>
        <li onClick={onEdit}>
          <FaEdit />
          <span>Editar</span>
        </li>
        <li onClick={onDelete}>
          <FaTrash />
          <span>Apagar</span>
        </li>
      </ul>
    </div>
  );
}

export default ActionsMenu;
