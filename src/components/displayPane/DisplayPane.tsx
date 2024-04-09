import { useWeb3React } from "@web3-react/core";
import { Divider, Typography } from "antd";
const { Title } = Typography;

import { useWindowSize } from "hooks";

import { Infos, SignMessage, Status, TransferEth } from "./components";

const styles = {
  container: {
    width: "80%",
    minWidth: "330px",
    maxWidth: "900px",
    textAlign: "center",
    margin: "auto",
    padding: "20px 0",
    borderRadius: "5px",
    boxShadow: "0px 0px 30px 30px rgba(30, 136, 229, 0.2)"
  },
  content: {
    width: "85%",
    margin: "auto",
    fontSize: "17px"
  },
  action: {
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px"
  }
} as const;

type DisplayPaneProps = {
  isDarkMode: boolean;
};

const DisplayPane: React.FC<DisplayPaneProps> = ({ isDarkMode }) => {
  const { chainId, isActivating, isActive } = useWeb3React();
  const { isTablet } = useWindowSize();

  return (
    <>
      <div
        style={{
          ...styles.container,
          border: isDarkMode ? "1px solid grey" : "1px solid black",
          width: isTablet ? "100%" : "100%",
          flex: isTablet ? "left" : "center",
          fontSize: isTablet ? "16px" : "17px",
        }}
      >
        <Title>Your Wallet Status</Title>
        <div style={styles.content}>
          <Status isActivating={isActivating} isActive={isActive} />
          <Infos chainId={chainId} />
          {isActive && (
            <>
              <Divider dashed={true} />
              <div style={styles.action}>
                <SignMessage />
                {!isTablet && <Divider type="vertical" style={{ fontSize: "120px !important" }} />}
                <TransferEth />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayPane;
