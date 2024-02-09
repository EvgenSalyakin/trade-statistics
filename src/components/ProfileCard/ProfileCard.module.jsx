import styles from "./ProfileCard.module.scss";

export const Avatar = ({ src, alt }) => {
  return <img className={styles.avatar} src={src} alt={alt} />;
};
export const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};
export const CardBody = ({ children }) => {
  return <div className={styles.cardBody}>{children}</div>;
};
export const CardFooter = ({ children }) => {
  return <div className={styles.cardFooter}>{children}</div>;
};
export const CardHeader = ({ children }) => {
  return <div className={styles.cardHeader}>{children}</div>;
};
export const CardPoster = ({ src, alt }) => {
  return <img className={styles.cardPoster} src={src} alt={alt} />;
};
/*
export const CardPoster = (props) => {
  return <img className={styles.cardPoster} {...props} />;
};*/
export const CardText = ({ children }) => {
  return <p className={styles.cardText}>{children}</p>;
};
export const CardTitle = ({ children }) => {
  return <h2 className={styles.cardTitle}>{children}</h2>;
};
export const Tag = ({ children }) => {
  return <span className={styles.tag}>{children}</span>;
};
export const UserBox = ({ children }) => {
  return <div className={styles.userBox}>{children}</div>;
};
export const UserInfo = ({ children }) => {
  return <div className={styles.userInfo}>{children}</div>;
};
export const UserName = ({ children }) => {
  return <h3 className={styles.userName}>{children}</h3>;
};
export const Date = ({ children }) => {
  return <small className={styles.date}>{children}</small>;
};
