import styles from "./styles.module.scss";

export const Container = ({ children, ...props }) => {
  return (
    <div className={styles.container} {...props}>
      {children}
    </div>
  );
};

export const Heading = ({
  children,
  marginTop,
  marginBottom,
  textAlign,
  ...props
}) => {
  return (
    <h2
      className={styles.heading}
      style={{
        textAlign: `${!textAlign ? "left" : textAlign}`,
        marginTop: `${!marginTop ? 0 : marginTop}`,
        marginBottom: `${!marginBottom ? 0 : marginBottom}`,
      }}
      {...props}
    >
      {children}
    </h2>
  );
};

export const Section = ({ children, ...props }) => {
  return (
    <section className={styles.section} {...props}>
      {children}
    </section>
  );
};

export const BaseTable = ({ children, ...props }) => {
    return <table className={styles.table} {...props}>{children}</table>;
  };
  
  export const THead = ({ children, ...props }) => {
    return <thead className={styles.tHead} {...props}>{children}</thead>;
  };
  
  export const Td = ({ children, ...props }) => {
    return <td className={styles.td} {...props}>{children}</td>;
  };
  
  export const Th = ({ children, ...props }) => {
    return <th className={styles.th} {...props}>{children}</th>;
  };
  
  export const Tr = ({ children, ...props }) => {
    return <tr className={styles.tr} {...props}>{children}</tr>;
  };
  