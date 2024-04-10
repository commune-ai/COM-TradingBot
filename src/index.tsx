import React from "react";

import { Web3ReactProvider } from "@web3-react/core";
import { createRoot } from "react-dom/client";
// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import connectors from "./connectors";
// import Dashboard from './pages/Dashboard';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Web3ReactProvider connectors={connectors}>
      {/* <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
      </Router> */}
      <App/>
    </Web3ReactProvider>
  </React.StrictMode>
);
