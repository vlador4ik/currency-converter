import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  return (
    <>
    <div className="title_wrapper">
      <h1>Конвертер валют згідно з офіційним курсом НБУ</h1>
    </div>
    <div className="App">
      
      <Block value={0} currency="UAH" onChangeCurrency={(cur) => console.log(cur)} />
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
      <Block value={0} currency="USD" />
    </div>
    </>
  );
}

export default App;
