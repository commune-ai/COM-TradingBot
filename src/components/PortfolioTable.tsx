import { Table } from 'antd';
import React, { useEffect, useState } from 'react';

interface TradingItem {
    symbol: string;
    price: number;
    quantity: number;
}

const PortfolioTable: React.FC = () => {
    const [tradingData, setTradingData] = useState<TradingItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/get-trading-data');
                if (!response.ok) {
                    throw new Error('Failed to fetch trading data');
                }
                const data: TradingItem[] = await response.json();
                setTradingData(data);
            } catch (error) {
                console.error('Error fetching trading data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        {
            title: 'Symbol',
            dataIndex: 'symbol',
            key: 'symbol',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
        },
    ];

    return (
        <>
            <Table dataSource={tradingData} columns={columns} style={{padding: 0}}/>
        </>
    );
};

export default PortfolioTable;
