import React, { useState } from 'react';
import '../css/currency.css';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import axios from 'axios';

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_J36yAbW48ecUElIa5gsArAwndeECDTJSFwFSrx0m";

function Currency() {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState('');

  const exchange = async () => {
    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const calculatedResult = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(calculatedResult);
  };

  return (
    <div className='currency-div'>
      <div style={{ marginTop: '-20px', color: 'white', fontFamily: 'arial', backgroundColor: 'black', width: '100%', textAlign: 'center' }}>
        <h3>CURRENCY EXCHANGE APP</h3>
      </div>
      <div style={{ marginTop: '25px' }}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          type="number"
          className='amount'
        />
        
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className='from-currency-option'
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaArrowAltCircleRight style={{ fontSize: '25px', color: 'white', marginRight: '10px' }} />

        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className='to-currency-option'
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>

        <input
          value={result}
          type="number"
          className='result'
          readOnly
        />
      </div>
    </div>
  );
}

export default Currency;
