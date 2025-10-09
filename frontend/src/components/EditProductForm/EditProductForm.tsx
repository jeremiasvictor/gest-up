import { useState } from "react";
import styles from "./EditProductForm.module.css";

interface Product {
  id: number;
  name: string;
  value: number;
  quantity: number | null;
}

interface EditProductFormProps {
  productToEdit: Product;
  onSave: (updatedProduct: Product) => void;
  onCancel: () => void;
}

function EditProductForm({
  productToEdit,
  onSave,
  onCancel,
}: EditProductFormProps) {
  const [formData, setFormData] = useState(productToEdit);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //impede o recarregamento da página
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nome do Produto</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="value">Valor (R$)</label>
        <input
          type="number"
          id="value"
          name="value"
          value={formData.value}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="quantity">Quantidade</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={formData.quantity ?? ""}
          onChange={handleChange}
        />
      </div>

      <div className={styles.editProductButtons}>
        <button
          type="button"
          onClick={onCancel}
          className={styles.cancelButton}
        >
          Cancelar
        </button>
        <button type="submit" className={styles.saveButton}>
          Salvar
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
