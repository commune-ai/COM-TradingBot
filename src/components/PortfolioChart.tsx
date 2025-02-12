import { Area, AreaConfig } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';

interface DemoAreaProps {}

const PortfolioChart: React.FC<DemoAreaProps> = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g2/aapl.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const config: AreaConfig = {
    data: data, // Pass fetched data here
    xField: 'date', // Assuming 'date' is a field in your data
    yField: 'close',
  };

  return <Area {...config} />;
};

export default PortfolioChart;
