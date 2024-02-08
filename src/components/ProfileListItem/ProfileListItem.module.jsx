import styles from "./ProfileListItem.module.scss";

export const Name = ({ children }) => {
  return <h3 className={styles.name}>{children}</h3>;
};
export const ForbesItem = ({ children }) => {
  return <li className={styles.forbesItem}>{children}</li>;
};
export const Capital = ({ children }) => {
  return <span className={styles.capital}>{children}</span>;
};

export const Avatar = (props) => {
  return <img className={styles.avatar} {...props} />;
};
