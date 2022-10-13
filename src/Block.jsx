import React from 'react';

export const Block = ({ currencies, value, currentCurrency, onChangeValue, onChangeCurrency }) => (
  <div className="block">
    <ul className="currencies">
      <li className={currentCurrency == 'UAH' ? 'active' : ''}>
        UAH
      </li>
      {
      currencies.map((cur) => (
        <li
          onClick={() => onChangeCurrency(cur)}
          title={cur.txt}
          className={currentCurrency === cur.cc ? 'active' : ''}
          key={cur.cc}>
          {cur.cc}
        </li>
      ))}
      <li>
        <svg height="50px" viewBox="0 0 50 50" width="50px">
          <rect fill="none" height="50" width="50" />
          <polygon points="47.25,15 45.164,12.914 25,33.078 4.836,12.914 2.75,15 25,37.25 " />
        </svg>
      </li>
    </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
);
