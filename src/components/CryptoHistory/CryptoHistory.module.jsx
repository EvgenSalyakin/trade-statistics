import styles from "./CryptoHistory.module.scss";

export const BaseTable = ({ children }) => {
  return <table className={styles.baseTable}>{children}</table>;
};

export const THead = ({ children }) => {
  return <thead className={styles.tHead}>{children}</thead>;
};

export const Td = ({ children }) => {
  return <td className={styles.td}>{children}</td>;
};

export const Th = ({ children }) => {
  return <th className={styles.th}>{children}</th>;
};

export const Tr = ({ children }) => {
  return <tr className={styles.tr}>{children}</tr>;
};
