import styles from "./Statistics.module.scss";

export const StatisticTitle = ({ children }) => {
  return <h3 className={styles.statisticTitle}>{children}</h3>;
};
export const StatisticsList = ({ children }) => {
  return <ul className={styles.statisticsList}>{children}</ul>;
};
