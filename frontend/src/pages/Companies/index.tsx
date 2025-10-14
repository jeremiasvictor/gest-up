import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { InputMask } from "@react-input/mask";
import styles from "./Companies.module.css";

// import api from "../../services/api";
import Modal from "../../components/Modal/Modal";

import { FaPlus } from "react-icons/fa";

const mockCompanies = [
  { id: 1, name: "My coffe shop" },
  { id: 2, name: "Mu clothes shops" },
];

function Companies() {
  const [companies, setCompanies] = useState(mockCompanies);
  const [isLoading, setIsLoading] = useState(false);
  const [isNewCompanyModalOpen, setNewCompanyModalOpen] = useState(false);
  const [newCompanyData, setNewCompanyData] = useState({
    name: "",
    cnpj: "",
    address: "",
  });
  const [isCreating, setIsCreating] = useState(false);
  const [createError, setCreateError] = useState("");

  //function to mock data
  const handleCreateCompany = () => {
    if (!newCompanyData.name.trim()) {
      setCreateError("Company name must not be empty");
      return;
    }
    setIsCreating(true);
    setCreateError("");

    setTimeout(() => {
      const newCompany = {
        id: Date.now(),
        name: newCompanyData.name,
        productCount: 0,
        cnpj: newCompanyData.cnpj,
        address: newCompanyData.address,
      };

      setCompanies((currentCompanies) => [...currentCompanies, newCompany]);
      setIsCreating(false);
      handleCloseModal();
    }, 500);
  };

  //when connect api
  //   async function handleCreateCompany() {
  //     if (!newCompanyData.name) {
  //       setCreateError('Company name cannot be empty');
  //       return;
  //     }
  //     setIsCreating(true);
  //     setCreateError('');

  //     try {
  //       const response = await api.post('/companies', newCompanyData);
  //       setEmpresas(currentEmpresas => [...currentEmpresas, response.data]);

  //       handleCloseModal();
  //     } catch (err) {
  //       console.error("Error when creating company", err);
  //       setCreateError('Unable to create company. Please try again.');
  //     } finally {
  //       setIsCreating(false);
  //     }
  //   }

  //when connect api
  /*
  useEffect(() => {
    setIsLoading(true);
    api.get('/companies')
      .then(response => setCompanies(response.data))
      .catch(err => console.error("Error when searching for companies", err))
      .finally(() => setIsLoading(false));
  }, []);
  */

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCompanyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseModal = () => {
    setNewCompanyModalOpen(false);
    setNewCompanyData({ name: "", cnpj: "", address: "" });
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
        <h1 className={styles.title}>Select or create a company</h1>
      </header>

      {isLoading ? (
        <p>Loading companies...</p>
      ) : (
        <main className={styles.gridContainer}>
          {companies.map((company) => (
            <Link
              key={company.id}
              to={`/companies/${company.id}/stock`}
              className={styles.card}
            >
              <span>{company.name}</span>
            </Link>
          ))}

          <button
            className={`${styles.card} ${styles.newCard}`}
            onClick={() => setNewCompanyModalOpen(true)}
            type="button"
          >
            <FaPlus />
            <span>Create new company</span>
          </button>
        </main>
      )}

      <Modal
        isOpen={isNewCompanyModalOpen}
        onClose={handleCloseModal}
        contentClassName={styles.companiesModal}
      >
        <div className={styles.companiesModalContent}>
          <h2>Create new company</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newCompanyData.name}
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
              value={newCompanyData.cnpj}
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
              value={newCompanyData.address}
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
              onClick={handleCreateCompany}
              className={styles.createButton}
              disabled={isCreating}
            >
              {isCreating ? "Creating..." : "Create company"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Companies;
