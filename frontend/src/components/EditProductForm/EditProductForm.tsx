import { useState } from "react";
import styles from "./EditProductForm.module.css";

interface Product {
  id: number;
  name: string;
  price: number;
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

  //function to update the changes on form inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //prevents page reload
    const dataToSend = {
      ...formData,
      price: parseFloat(formData.price as any) || 0,
      quantity: parseInt(formData.quantity as any) || 0,
    };
    onSave(dataToSend);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Product name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="prime"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="quantity">Quantity</label>
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
          Cancel
        </button>
        <button type="submit" className={styles.saveButton}>
          Save
        </button>
      </div>
    </form>
  );
}

export default EditProductForm;
