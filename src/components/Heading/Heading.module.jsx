import Styles from "./Heading.module.scss";

export const Heading = ({ children, marginTop, marginBottom, textAlign }) => {
  return (
    <h2
      className={Styles.heading}
      style={{
        textAlign: `${!textAlign ? "left" : textAlign}`,
        marginTop: `${!marginTop ? 0 : marginTop}`,
        marginBottom: `${!marginBottom ? 0 : marginBottom}`,
      }}
    >
      {children}
    </h2>
  );
};
