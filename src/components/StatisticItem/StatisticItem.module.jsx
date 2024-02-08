import styles from "./StatisticItem.module.scss";

export const StatisticText = ({ children }) => {
  return <p className={styles.statisticText}>{children}</p>;
};
export const StatisticBox = ({ children }) => {
  return <li className={styles.statisticBox}>{children}</li>;
};
export const StatisticCounter = ({ children }) => {
  return <span className={styles.statisticCounter}>{children}</span>;
};
