import React from "react";
import styles from "./MainContentCard.module.css";

interface CardProps {
  children: React.ReactNode;
}

function MainContentCard({ children }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
}

export default MainContentCard;
