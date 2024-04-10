import { Buffer } from "buffer";
// import {
//   DropdownOptions,
//   MenuOption,
//   PipelineParams,
//   Position,
//   StartPipeline,
//   StopPipeline,
//   GetCurrentPrices,
//   UpdateMessage,
//   DeletePipeline,
//   BalanceObj,
//   Decimals,
//   RawTrade,
//   PipelinesMetrics,
//   RawPipeline,
//   PipelinesObject, TradesObject, EditPipeline, EquityTimeSeries, Strategy
// } from "../types";
import {
  ConfigProvider,
  Layout, theme
} from 'antd';
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


import {
  CustomHeader, MainContent
} from "layout";
import Dashboard from "pages/Dashboard";
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

// interface State {
//   symbolsOptions: DropdownOptions[];
//   strategiesOptions: Strategy[];
//   candleSizeOptions: DropdownOptions[];
//   exchangeOptions: DropdownOptions[];
//   trades: TradesObject;
//   pipelines: PipelinesObject;
//   positions: Position[];
//   balances: BalanceObj
//   equityTimeSeries: EquityTimeSeries
//   menuOption: MenuOption,
//   symbols: string[],
//   currentPrices: Object
//   pipelinesMetrics: PipelinesMetrics
// }



function App() {
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
              <Route path='/dashboard' element={
              <Dashboard
                  // balances={balances}
                  // size={size}
                  // pipelines={pipelines}
                  // trades={trades}
                  // positions={positions}
                  // currentPrices={currentPrices}
                  // pipelinesMetrics={pipelinesMetrics}
                  // equityTimeSeries={equityTimeSeries}
                  // updatePipelinesMetrics={this.updatePipelinesMetrics}
            />} />
            </Routes>
          </Router>
        </MainContent>
      </Layout>
    </ConfigProvider >

  );
}

export default App;
