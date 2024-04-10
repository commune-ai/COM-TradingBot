import { Buffer } from "buffer";

import { ConfigProvider, Layout, theme } from 'antd';
import { useState } from "react";


import { CustomHeader, CustomSidebar, MainContent } from "layout";
import "styles/App.css";



const styles = {
  layout: {
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    fontFamily: "Sora, sans-serif"
  }
} as const;


function Dashboard() {
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
        <CustomSidebar />
        <MainContent >
          <div style={{ marginTop: '5rem' }}>
            
          </div>
        </MainContent>
      </Layout>
    </ConfigProvider >

  );
}

export default Dashboard;
