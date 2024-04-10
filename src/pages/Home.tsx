import { Buffer } from "buffer";

import { Divider } from 'antd';
import { NewsLetter } from 'components/NewsLetter';
import { Accordion } from "components/displayPane/Accordion";
import BotSummary from "components/displayPane/BotSummary";
import DisplayPane from "components/displayPane/DisplayPane";
import Card from 'components/displayPane/components/Botselect/Card';
import CardFree from 'components/displayPane/components/Botselect/CardFree';
import Lottie from "react-lottie";


import { CustomFooter } from "layout";
import "styles/App.css";
import invest from '../assets/images/business-investment.jpg';
import commune from '../assets/images/logo.gif';
import tradingimage from '../assets/images/trading.jpg';

import Trading2 from '../assets/animation/trading2.json';
const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Trading2,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};





function Home() {
    // const { defaultAlgorithm, darkAlgorithm } = theme;
    const isDarkMode = true;
    if (!window.Buffer) window.Buffer = Buffer;

    return (
        <>
                <div style={{ marginTop: '5rem' }}>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white gap-8 mb-48'>
                        <div className="m-auto w-[80%] h-[80%] xl:-mr-20  relative z-[5]">
                            <DisplayPane isDarkMode={isDarkMode} />
                        </div>
                        <div className="m-auto">
                            <img src={commune} alt="" className="w-[80%] xl:-mr-20  relative z-[5]" />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white mb-12'>
                        <div className="m-auto m-auto w-[80%] h-[80%] xl:-mr-20  relative z-[5]">
                            <BotSummary isDarkMode={isDarkMode} />
                        </div>
                        <div className="m-auto w-[80%] h-[80%] xl:-mr-20  relative z-[5]">
                            <Lottie
                                options={defaultOptions2}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                    <div>
                        <p style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            color: isDarkMode ? '#fff' : '#000'
                        }}> <Divider orientation="left">Bot list</Divider></p>
                    </div>
                    <div className='grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 text-white gap-2 mb-24'>
                        <div className="m-auto">
                            <CardFree />
                        </div>
                        <div className="m-auto">
                            <Card />
                        </div>
                        <div className="m-auto">
                            <Card />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 text-white gap-4 mb-12'>
                        <div className="m-auto">
                            <img src={invest} alt="" className="h-3/5 xl:-mr-2 relative z-[5] rounded-xl " />
                        </div>
                        <div className="m-auto">
                            <img src={tradingimage} alt="" className="w-[100%] xl:-mr-2 relative z-[5] rounded-xl " />

                        </div>
                    </div>
                    <Accordion />
                    <NewsLetter />
                    <CustomFooter />
                </div>
        </>

    );
}

export default Home;
