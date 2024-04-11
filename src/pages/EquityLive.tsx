import { Col, Row } from 'antd';
import { Buffer } from "buffer";
import PortfolioTable from 'components/PortfolioTable';

import "styles/App.css";



// const styles = {
//   layout: {
//     width: "100vw",
//     height: "100vh",
//     overflow: "auto",
//     fontFamily: "Sora, sans-serif"
//   }
// } as const;


function EquityLive() {
    // const [isDarkMode, setIsDarkMode] = useState(true);
    if (!window.Buffer) window.Buffer = Buffer;

    const rowStyle = {
        width: '100%',
        paddingBottom: '3px',
        paddingTop: '70px',
    }

    // const cardStyle= {
    //     height: '300px'
    // }

    return (
        <div style={rowStyle}>
            <Row gutter={16}>
                <Col span={24}>
                    <PortfolioTable/>
                </Col>
            </Row>
        </div>

    );
}

export default EquityLive;

