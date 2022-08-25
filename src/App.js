import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCurrency, setFromCurrency] = React.useState('UAH');
  const [toCurrency, setToCurrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);
  const [rates, setRates] = React.useState({});
  React.useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then(res => res.json().then()).then(data => {
      setRates(data)
      console.log(data);
    })
    .catch((err) => {
      console.warn(err);
      alert('Не вдалось отримати інформацію, спробуйте пізніше!')
    })
      
  }, [])

  const onChangeFromPrice = (value) => {
    setFromPrice(value);
  }
  const onChangeToPrice = (value) => {
    setToPrice(value);
  }
  return (
    <>
    <div className="title_wrapper">
      <h1>Конвертер валют згідно з офіційним курсом НБУ</h1>
    </div>
    <div className="App">
      
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency} 
        onChangeValue={onChangeFromPrice} />
      <div className='convert_logo'>
        <svg  x="0px" y="0px" width="70px" viewBox="0 0 506.568 506.568">
          <g>
            <polygon points="0,253.284 98.284,351.568 98.284,253.284 	"/>
            <polygon points="506.568,253.284 408.284,155 408.284,233.284 98.284,233.284 98.284,155 0,253.284 
              98.284,253.284 98.284,273.284 408.284,273.284 408.284,253.284 	"/>
            <polygon points="506.568,253.284 408.284,253.284 408.284,351.568 	"/>
          </g>
        </svg>
      </div>
      <Block 
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setFromCurrency} 
        onChangeValue={onChangeToPrice} />

    </div>
    </>
  );
}

export default App;
