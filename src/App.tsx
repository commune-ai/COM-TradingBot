import {
  ConfigProvider,
  Layout, theme
} from 'antd';
import { Buffer } from "buffer";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {
  CustomHeader, MainContent
} from "layout";


import Dashboard from "pages/Dashboard";
import EquityLive from "pages/EquityLive";
import Home from "pages/Home";
import "styles/App.css";

const styles = {
  layout: {
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    fontFamily: "Sora, sans-serif"
  }
} as const;

function App () {

  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);
  if (!window.Buffer) window.Buffer = Buffer;

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
      }}
    >
      <Layout style={styles.layout}>
        <CustomHeader isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <MainContent >
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/trade_dash' element={
              <Dashboard/>} />
            <Route path="/equity_live" element={<EquityLive/>} />
            </Routes>
          </Router>
        </MainContent>
      </Layout>
    </ConfigProvider >

  );
}

export default App;
