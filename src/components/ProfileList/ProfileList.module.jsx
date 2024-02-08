import styles from "./ProfileList.module.scss";

export const LeaderBoard = ({ children }) => {
  return <div className={styles.leaderBoard}>{children}</div>;
};

export const BoardHeader = ({ children }) => {
  return <header className={styles.boardHeader}>{children}</header>;
};

export const BoardTitle = ({ children }) => {
  return <h2 className={styles.boardTitle}>{children}</h2>;
};

export const TitleTop = ({ children }) => {
  return <span className={styles.titleTop}>{children}</span>;
};

export const TitleBottom = ({ children }) => {
  return <span className={styles.titleBottom}>{children}</span>;
};

export const LeaderBoardProfiles = ({ children }) => {
    return <ul className={styles.leaderBoardProfiles}>{children}</ul>;
  };
