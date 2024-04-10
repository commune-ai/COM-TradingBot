import { useWindowSize } from "hooks";
import { FC } from "react";

type MainContentProps = {
  children?: React.ReactNode;
};

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "1rem",
    padding: "50px",
    overflow: "auto",
    width: "100%",
    height: "100%",
    position: "relative",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    "@media (max-width: 768px)": {
      marginTop: "100px",
      padding: "30px 0",
      overflow: "hidden"
    }
  },
  contentMobile: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: "100px",
    padding: "30px 0",
    overflow: "hidden"
  }
} as const;

const MainContent: FC<MainContentProps> = ({ children }) => {
  const { isTablet } = useWindowSize();

  return <div style={isTablet ? styles.contentMobile : styles.content}>
    {children}
  </div>;
};

export default MainContent;
