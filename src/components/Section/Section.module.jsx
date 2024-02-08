import Styles from "./Section.module.css";

export const Section = ({ children }) => {
  return <section className={Styles.sectionStyle}>{children}</section>;
};
