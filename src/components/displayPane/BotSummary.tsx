import { Divider } from "antd";
// import { Button } from 'antd';
import { ArrowRightOutlined, BarChartOutlined, SearchOutlined } from "@ant-design/icons";
import { useWindowSize } from "hooks";

import { Link, useNavigate } from 'react-router-dom';



const summayStyles = {
  container: {
    width: "100%",
    minWidth: "300px",
    maxWidth: "900px",
    textAlign: "center",
    margin: "auto",
    padding: "20px 0",
    border: "1px solid grey",
    borderRadius: "10px",
    boxShadow: "0px 0px 30px 30px rgba(30, 136, 229, 0.2)"
  },
  content: {
    width: "50%",
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

type BotSummaryProps = {
  isDarkMode: boolean;
};
const BotSummary: React.FC<BotSummaryProps> = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const handleTrade = () => {
    navigate('/trade');
  };
  const { isTablet } = useWindowSize();
  return (
    <>
      <div style={{ ...summayStyles.container }}>
        <div>
          <p style={{
            fontSize: isTablet ? "20px" : "20px",
            fontWeight: "bold",
            color: isDarkMode ? "#fff" : "#000"
          }}>
            Explore Bot
          </p>
          <span style={{
            fontSize: isTablet ? "16px" : "14px",
            color: isDarkMode ? "#fff" : "#000",
            padding: 'auto',
            fontWeight: "normal",
            lineHeight: "20px",
            textAlign: "center",
            justifyContent: 'center',
          }}>
            <SearchOutlined style={{ fontSize: '18px', color: '#08c', marginLeft: '10px', paddingRight: '30px', marginBottom: '10px' }} />Explore various trading bots<br />
            <BarChartOutlined style={{ fontSize: '18px', color: '#08c', marginLeft: '10px', paddingRight: '30px' }} /> Buy low and sell high 24/7.
          </span>
        </div>
        <Divider dashed />
        <button onClick={handleTrade} className="rounded-xl py-2 px-4 md:py-3 md:px-6 text-xs md:text-sm duration-200 font-medium
  text-blue-600 hover:-translate-y-0.5 active:translate-y-0 bg-transparent dark:bg-transparent
  hover:bg-blue-600 border-2 border-blue-300 hover:border-blue-600 dark:border-blue-600
  dark:hover:border-blue-600 text-blue-600 hover:text-white dark:text-blue-600
  dark:hover:bg-blue-600 dark:hover:text-white">
          <Link to="/trade">
            Trade Now
          </Link>
          <ArrowRightOutlined />
        </button>
      </div>
    </>
  );
}

export default BotSummary;
