import { Card, Col, Row } from 'antd';
import { Buffer } from "buffer";

// import { theme } from 'antd';
// import { useState } from "react";


import "styles/App.css";



// const styles = {
//   layout: {
//     width: "100vw",
//     height: "100vh",
//     overflow: "auto",
//     fontFamily: "Sora, sans-serif"
//   }
// } as const;


function Dashboard() {
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
                <Col span={8}>
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
                <Col span={8}>
                    <Card title="Equity" hoverable bordered={false} headStyle={{ textAlign: 'center', color: '#2185d0' }} style={{ textAlign: 'center',color: '#2185d0', ...cardStyle  }}>
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
                <Col span={8}>
                    <Card title="Trading Bots" hoverable bordered={false} headStyle={{ textAlign: 'center', color: '#00b5ad' }} style={{ textAlign: 'center', color: '#00b5ad', ...cardStyle  }}>
                        <Row>
                            <Col span={12}>
                                <h1>#trading bots</h1>
                                <h2>0</h2>
                                <h1 style={{paddingTop: '50px'}}>Best Win Rate</h1>
                                <h2>0</h2>
                            </Col>
                            <Col span={12}>
                                <h1>#active trading bots</h1>
                                <h2>0</h2>
                                <h1 style={{paddingTop: '50px'}}>Most Trades</h1>
                                <h2>0</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row gutter={16} style={{ paddingTop: '50px' }}>
                <Col span={8}>
                    <Card title="Trades" hoverable bordered={false} headStyle={{ textAlign: 'center', color: '#a333c8' }} style={{ textAlign: 'center', color: '#a333c8', ...cardStyle  }}>
                        <Row>
                            <Col span={8}>
                                <h1>#trades</h1>
                                <h2>0</h2>
                                <h1  style={{paddingTop: '50px'}}>Win Rate</h1>
                                <h2>0%</h2>
                            </Col>
                            <Col span={8}>
                                <h1>Max trade duration</h1>
                                <h2>0m</h2>
                                <h1  style={{paddingTop: '50px'}}>Best Trade</h1>
                                <h2>0.00%</h2>
                            </Col>
                            <Col span={8}>
                                <h1>Avg trade duration</h1>
                                <h2>0m</h2>
                                <h1 style={{paddingTop: '50px'}}>Worst Trade</h1>
                                <h2>0.00%</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Positions" hoverable bordered={false} headStyle={{ textAlign: 'center', color: '#e13997' }} style={{ textAlign: 'center', color: '#e13997', ...cardStyle}}>
                        <Row>
                            <Col span={8}>
                                <h1>#positions</h1>
                                <h2>0</h2>
                            </Col>
                            <Col span={8}>
                                <h1>Total Size</h1>
                                <h2>0.0 $USDT</h2>
                            </Col>
                            <Col span={8}>
                                <h1>Net profit</h1>
                                <h2>_</h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="Currencies" hoverable bordered={false} headStyle={{ textAlign: 'center', color: '#e13997' }} style={{ textAlign: 'center', color: '#e13997', ...cardStyle  }}>
                        <Row>
                            <Col span={12}>
                                <h1>Positions</h1>
                                <h2></h2>
                            </Col>
                            <Col span={12}>
                                <h1>Trades</h1>
                                <h2></h2>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </div>

    );
}

export default Dashboard;


// const styles = {
//     tradesStatsStyle: {
//         margin: '20px 10px',
//         width: '50%',
//     },
//     segment: {
//         width: '80%',
//         padding: '30px 30px 20px',
//         marginBottom: '40px'
//     },
//     balanceTitle: {
//         alignSelf: 'center'
//     },
//     rowSegment: {
//         margin: '20px 10px',
//         minHeight: '200px'
//     },
//     balanceHeader: {
//         fontSize: '1.0em',
//         color: 'rgb(119,137,220)',
//     },
//     tradesHeader: {
//         fontSize: '1.0em',
//         color: 'rgb(169,142,227)',
//     },
//     positionsHeader: {
//         fontSize: '1.0em',
//         color: 'rgb(198,104,206)',
//     },
//     pipelinesHeader: {
//         fontSize: '1.0em',
//         color: 'rgb(94,182,182)'
//     },
//     balanceColumn: {
//         fontSize: '1.2em',
//         color: '#3555c9',
//         fontWeight: '600',
//     },
//     tradesColumn: {
//         fontSize: '1.2em',
//         color: '#6435C9',
//         fontWeight: '600',
//     },
//     positionsColumn: {
//         fontSize: '1.2em',
//         color: '#9235ad',
//         fontWeight: '600',
//     },
//     pipelinesColumn: {
//         fontSize: '1.2em',
//         color: '#0e6972',
//         fontWeight: '600',
//     },
//     buttonDiv: {
//         width: '100%',
//         alignSelf: 'center'
//     }
// }
