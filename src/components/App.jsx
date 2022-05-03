import { useState } from 'react';
import { RadioForm } from './RadioForm/RadioForm';
import { TextForm } from './TextForm/TextForm';
import { Chart } from './Chart/Chart';

export function App() {
  const [chartData, setChartData] = useState({
    values: [],
    labels: [],
  });
  const [displayChart, setDisplayChart] = useState('bar');

  const onTextChange = (target, array) => {
    setChartData(previousState => {
      return {
        ...previousState,
        [target]: array,
      };
    });
  };

  const onRadioChange = value => {
    setDisplayChart(value);
  };

  return (
    <>
      <TextForm onTextChange={onTextChange} />
      <Chart chartData={chartData} displayChart={displayChart} />
      <RadioForm onRadioChange={onRadioChange} />
    </>
  );
}
