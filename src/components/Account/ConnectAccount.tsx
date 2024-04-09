import React, { useCallback, useState } from "react";

import { useWeb3React } from "@web3-react/core";
// import { Button } from "antd";

import { metaMask } from "connectors/metaMask";
import { walletConnect } from "connectors/walletConnect";
import { useWindowSize } from "hooks";
import { getEllipsisTxt } from "utils/formatters";

import ConnectModal from "./ConnectModal";
import DisconnectModal from "./DisconnectModal";
import Jazzicons from "../Jazzicons";

const styles = {
  account: {
    height: "42px",
    borderRadius: "10px",
    display: "inline-flex",
    alignItems: "center",
    border: " 1px solid rgba(152, 161, 192, 0.24)"
  },
  button: {
    height: "40px",
    padding: "0 20px",
    textAlign: "center",
    fontWeight: "600",
    letterSpacing: "0.2px",
    fontSize: "15px",
    margin: "20px 20px",
    border: "none"
  },
  modalTitle: {
    marginBottom: "20px",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "20px"
  }
} as const;

interface WantedChain {
  chain?: number;
}

const ConnectAccount: React.FC<WantedChain> = () => {
  const { account } = useWeb3React();
  const { isTablet } = useWindowSize();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);

  const disconnect = useCallback(async () => {
    const connector = metaMask || walletConnect;
    setIsModalVisible(false);
    setIsAuthModalOpen(false);
    localStorage.removeItem("connectorId");
    if (connector.deactivate) {
      connector.deactivate();
    } else {
      connector.resetState();
    }
    // @ts-expect-error close can be returned by wallet
    if (connector && connector.close) {
      // @ts-expect-error close can be returned by wallet
      await connector.close();
    }
  }, []);

  return (
    <>
      {account === undefined ? (
        <div>
          <button className="rounded-full py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
      hover:-translate-y-0.5 active:translate-y-0
      bg-transparent dark:bg-transparent hover:bg-orange-600 border-2 border-orange-300
      hover:border-orange-600 dark:border-orange-600 dark:hover:border-orange-600 text-orange-600 hover:text-white dark:text-orange-600 dark:hover:bg-orange-600 dark:hover:text-white mx-1 md:mx-2 my-1 md:my-2 " style={styles.button} onClick={() => setIsAuthModalOpen(true)}>
            Connect Wallet
          </button>
          <ConnectModal isModalOpen={isAuthModalOpen} setIsModalOpen={setIsAuthModalOpen} />
          <br />
        </div>
      ) : (
        <>
          <button style={styles.account} onClick={() => setIsModalVisible(true)} className="rounded-full py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
      hover:-translate-y-0.5 active:translate-y-0
      bg-transparent dark:bg-transparent hover:bg-orange-600 border-2 border-orange-300
      hover:border-orange-600 dark:border-orange-600 dark:hover:border-orange-600 text-orange-600 hover:text-white dark:text-orange-600 dark:hover:bg-orange-600 dark:hover:text-white mx-1 md:mx-2 my-1 md:my-2">
            {account && typeof account === "string" && (
              <p style={{ marginRight: "5px" }}>{getEllipsisTxt(account, isTablet ? 3 : 6)}</p>
            )}
            <Jazzicons seed={account} />
          </button>

          <DisconnectModal isModalOpen={isModalVisible} setIsModalOpen={setIsModalVisible} disconnect={disconnect} />
        </>
      )}
    </>
  );
};

export default ConnectAccount;
