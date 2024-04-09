

import { Button, Divider, Grid, Space, theme, Typography } from "antd";
import { AppleFilled, TwitterCircleFilled, FacebookFilled, InstagramFilled, LikeFilled, YoutubeFilled } from '@ant-design/icons';
const { useToken } = theme;
const { useBreakpoint } = Grid;
// const { Title, Text } = Typography;
const { Text } = Typography;

export default function App() {
    const { token } = useToken();
    const screens = useBreakpoint();

    const styles = {
        container: {
            margin: "0 auto",
            maxWidth: screens.lg ? token.screenXL : token.screenSM,
            padding: screens.md ? `0px ${token.paddingLG}px` : `0px ${token.padding}px`
        },
        divider: {
            margin: 0
        },
        header: {
            backgroundColor: token.colorBgContainer,
            padding: `${token.paddingLG}px 0px`
        },
        placeholder: {
            backgroundColor: token.colorBgLayout,
            border: `${token.lineWidth}px dashed ${token.colorBorder}`,
            borderRadius: token.borderRadiusLG,
            padding: token.paddingLG,
            textAlign: "center"
        },
        section: {
            backgroundColor: token.colorBgContainer,
            padding: `${token.sizeXXL}px 0px`
        },
        tagline: {
            color: token.colorTextSecondary
        },
        title: {
            fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
            margin: "0px"
        },
        titleWrapper: {
            alignItems: screens.md ? "flex-end" : "flex-start",
            justifyContent: "space-between",
            width: "100%"
        }
    };

    return (
        <>
            <Divider style={styles.divider} />
            <div style={styles.section}>
                <div style={styles.container}>
                    <Space>
                        <Button><AppleFilled /></Button>
                        <Button><TwitterCircleFilled /></Button>
                        <Button><FacebookFilled /></Button>
                        <Button><InstagramFilled /></Button>
                        <Button><LikeFilled /></Button>
                        <Button><YoutubeFilled /></Button>
                    </Space>
                    <Text style={{ padding: '300px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: '10px', marginTop: '10px' }}>
                            <div>
                                <a href="">Privacy Policy</a> &nbsp; <br />
                                <a href="">Terms of Service</a> &nbsp;<br />
                                <a href="">Disclaimer</a> &nbsp; <br />
                            </div>
                            <div>
                                <a href="">Contact Us</a> &nbsp; <br />
                                <a href="">About Us</a> &nbsp; <br />
                                <a href="">FAQ</a> &nbsp; <br />
                            </div>
                            <div>
                                <a href="">Help</a> &nbsp; <br />
                                <a href="">Support</a> &nbsp; <br />
                                <a href="">Feedback</a> &nbsp; <br />
                            </div>
                            <div>
                                <a href="">Blog</a> &nbsp; <br />
                                <a href="">News</a> <br />
                            </div>
                        </div>
                        <div style={{ display: 'flex', textAlign: 'center', marginTop: '10px' }}>
                            <a href="" style={{ fontSize: '15px', color: 'white' }}>
                                Commune &nbsp; &copy; 2024 Trading Bot. &nbsp; All rights reserved.
                            </a>
                        </div>
                    </Text>
                </div>
            </div>
        </>
    );
}