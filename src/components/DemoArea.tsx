import { Area, AreaConfig } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';

// Extend AreaConfig interface to include custom options
interface CustomAreaConfig extends AreaConfig {
  connectNulls?: {
    connect: boolean;
    connectFill: string;
    connectFillOpacity: number;
  };
}

interface DemoAreaProps {}

const DemoArea: React.FC<DemoAreaProps> = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g2/aapl.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const config: CustomAreaConfig = {
    data: data,
    xField: 'date',
    yField: 'close',
    connectNulls: {
      connect: true,
      connectFill: 'grey',
      connectFillOpacity: 0.15,
    },
  };

  return <Area {...config} />;
};

export default DemoArea;
