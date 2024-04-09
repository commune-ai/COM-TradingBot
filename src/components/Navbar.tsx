import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Menu, Typography } from "antd";
import { throttle } from 'lodash';
import React from "react";
import { Link } from "react-router-dom";

import commune_logo from "assets/images/logo.gif";

interface NavbarProps { };

const Navbar: React.FC<NavbarProps> = () => {
  const [activeMenu, setActiveMenu] = React.useState<boolean>(false);
  const [screenSize, setScreenSize] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = throttle(() => setScreenSize(window.innerWidth), 300);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (screenSize && screenSize < 801) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar
          src={commune_logo}
          size="large"
        />
        <Typography.Title level={2} className="logo">
          <Link to="/">Trading Bot</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/trade">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/trade/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/trade/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/trade/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};
export default Navbar;
