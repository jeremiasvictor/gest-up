import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputMask } from "@react-input/mask";
import styles from "./Business.module.css";

import api from "../../services/api";
import Modal from "../../components/Modal/Modal";

import { FaPlus } from "react-icons/fa";

interface IBusiness {
  id: number;
  name: string;
  cnpj: string;
  address: string;
}

function Business() {
  const [businesses, setBusinesses] = useState<IBusiness[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isNewBusinessModalOpen, setNewBusinessModalOpen] = useState(false);
  const [newBusinessData, setNewBusinessData] = useState({
    name: "",
    cnpj: "",
    address: "",
  });
  const [isCreating, setIsCreating] = useState(false);
  const [createError, setCreateError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("gestup_userId");

    if (userId) {
      setIsLoading(true);

      api
        .get(`/business/${userId}`)
        .then((response) => setBusinesses(response.data))
        .catch((err) => console.error("Error when searching for business", err))
        .finally(() => setIsLoading(false));
    } else {
      navigate("/login");
    }
  }, [navigate]);

  async function handleCreateBusiness() {
    if (!newBusinessData.name.trim()) {
      setCreateError("Business name cannot be empty");
      return;
    }
    setIsCreating(true);
    setCreateError("");
    const userId = localStorage.getItem("gestup_userId");

    if (!userId) {
      setCreateError("User not authenticated. Please log in again.");
      setIsCreating(false);
      return;
    }

    try {
      const dataToSend = {
        ...newBusinessData,
        userID: userId,
      };
      const response = await api.post("/business", dataToSend);
      setBusinesses((currentBusinesses) => [
        ...(currentBusinesses || []),
        response.data,
      ]);

      handleCloseModal();
    } catch (err: any) {
      // --- FAÇA ESTA MUDANÇA PARA DEPURAÇÃO ---
      console.error("DETALHES COMPLETOS DO ERRO:", err); // Loga o objeto de erro inteiro
      if (err.response) {
        // O servidor respondeu com um status de erro (4xx, 5xx)
        console.error("DADOS DO ERRO (do backend):", err.response.data);
        console.error("STATUS DO ERRO:", err.response.status);
      }
      // -----------------------------------------

      setCreateError("Não foi possível criar a empresa. Tente novamente.");
    } finally {
      setIsCreating(false);
    }
  }

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewBusinessData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setNewBusinessModalOpen(false);
    setNewBusinessData({ name: "", cnpj: "", address: "" });
    setCreateError("");
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.bgIcons}>
        <img src="/flecha.png" alt="" className={styles.bgArrow} />
        <img src="/flecha.png" alt="" className={styles.bgArrow} />
      </div>
      <header className={styles.header}>
        <a href="/">
          <img className={styles.logo} src="/icon.png" alt="Logo Image" />
        </a>
        <h1 className={styles.title}>Select or create a business</h1>
      </header>

      {isLoading ? (
        <p>Loading business...</p>
      ) : (
        <main className={styles.gridContainer}>
          {businesses.map((business) => (
            <Link
              key={business.id}
              to={`/business/${business.id}/stock`}
              className={styles.card}
            >
              <span>{business.name}</span>
            </Link>
          ))}

          <button
            className={`${styles.card} ${styles.newCard}`}
            onClick={() => setNewBusinessModalOpen(true)}
            type="button"
          >
            <FaPlus />
            <span>Create new business</span>
          </button>
        </main>
      )}

      <Modal
        isOpen={isNewBusinessModalOpen}
        onClose={handleCloseModal}
        contentClassName={styles.businessModal}
      >
        <div className={styles.businessModalContent}>
          <h2>Create new business</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newBusinessData.name}
              onChange={handleFormChange}
              placeholder="Ex: Neighborhood coffee shop"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="cnpj">CNPJ</label>
            <InputMask
              mask="XX.XXX.XXX/XXXX-XX"
              replacement={{ X: /\d/ }}
              id="cnpj"
              name="cnpj"
              className={styles.seuInput}
              value={newBusinessData.cnpj}
              onChange={handleFormChange}
              placeholder="00.000.000/0000-00"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="address">Adress</label>
            <input
              type="text"
              id="address"
              name="address"
              value={newBusinessData.address}
              onChange={handleFormChange}
              placeholder="Ex: Flower Street, 123"
            />
          </div>

          {createError && <p className={styles.errorMessage}>{createError}</p>}

          <div className={styles.modalActions}>
            <button onClick={handleCloseModal} className={styles.cancelButton}>
              Cancel
            </button>
            <button
              onClick={handleCreateBusiness}
              className={styles.createButton}
              disabled={isCreating}
            >
              {isCreating ? "Creating..." : "Create business"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Business;
