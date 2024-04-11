import { Card, Col, Row } from 'antd';
import { Buffer } from "buffer";


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

    const cardStyle= {
        height: '300px'
    }

    return (
        <div style={rowStyle}>
            <Row gutter={16}>
                <Col span={24}>
                    <Card title="Equity" hoverable bordered={false} headStyle={{ textAlign: 'center', color: '#2185d0' }} style={{ textAlign: 'center', color: '#2185d0', ...cardStyle }}>
                        <Row>
                            <Col span={12}>
                                <h1>Totail Equity</h1>
                                <h2>0.0 $USDT</h2>
                            </Col>
                            <Col span={12}>
                                <h1>Available Equity</h1>
                                <h2>0.0 $USDT</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>

    );
}

export default EquityLive;

