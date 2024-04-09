import { useWeb3React } from "@web3-react/core";
import { Button, Layout } from "antd";
import { FC } from "react";

import dark_mode from "assets/images/dark_mode.png";
import light_mode from "assets/images/light_mode.png";
import { default as commune_logo, default as commune_logo_dark } from "assets/images/logo.gif";
import ConnectAccount from "components/Account/ConnectAccount";
import ChainSelector from "components/ChainSelector";
import { useWindowSize } from "hooks";
import { Status } from "../../components/displayPane/components";

import { LinearGradient } from 'react-text-gradients';

const { Header } = Layout;

const styles = {
  header: {
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    backgroundColor: "transparent",
    paddingTop: "30px",
    zIndex: 1,
  },
  headerRight: {
    display: "flex",
    gap: "25px",
    alignItems: "center",
    paddingRight: "10px",
    fontSize: "20px",
    fontWeight: "600"
  }
} as const;

type CustomHeaderProps = {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomHeader: FC<CustomHeaderProps> = ({ isDarkMode, setIsDarkMode }) => {
  const { isActivating, isActive } = useWeb3React();
  const { isTablet } = useWindowSize();

  const toggleColorMode = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };

  return (
      <Header style={{ ...styles.header, padding: isTablet ? "15px 5px 0 5px" : "15px 20px 0 20px" }}>
        <div className="bg-opacity-60 backdrop-blur-md bg-white-800 fixed top-0 left-0 right-0 z-50 w-full flex justify-between items-center navbar flex-wrap border-0">
        <Logo isDarkMode={isDarkMode} />
        <p className="justify-center text-2xl md:text-3xl text-[px] xl:text-5xl  xl:leading-[2]"> <LinearGradient gradient={['to left', '#8717ff ,#68b1ff']}>Com-Trading Bot</LinearGradient></p>
        <div style={styles.headerRight}>
          <Button
            shape="round"
            ghost
            onClick={toggleColorMode}
            style={{ height: "42px", padding: "5px 7px 0 10px", border: "none" }}
          >
            <img src={isDarkMode ? light_mode : dark_mode} alt="color mode" width="25px" />
          </Button>
          <Status isActivating={isActivating} isActive={isActive} />
          <ChainSelector />
          <ConnectAccount />
        </div>
        </div>
      </Header>
  );
};

export default CustomHeader;

type LogoProps = {
  isDarkMode: boolean;
};

export const Logo: FC<LogoProps> = ({ isDarkMode }) => {
  const { isTablet } = useWindowSize();

  return (
    <>
      <div style={{ paddingTop: isTablet ? "25px" : "20px" }} className="py-4 px-12 ">
        <img
          src={isDarkMode ? commune_logo_dark : commune_logo}
          alt="Commune_logo"
          width={isTablet ? "40px" : "50px"}
        />
      </div>
    </>
  );
};
