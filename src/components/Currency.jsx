import React from 'react';
import '../css/currency.css';

function Currency() {
  return (
    <div className='currency-div'>
      <div style={{ marginTop: '-20px', color: 'white', fontFamily: 'arial', backgroundColor: 'black', width: '100%', textAlign: 'center' }}>
        <h3>CURRENCY EXCHANGE APP</h3>
      </div>
      <div style={{ marginTop: '25px' }}>
        <input
          type="number"
          className="amount"
          placeholder="Amount"
        />
      </div>
    </div>
  );
}

export default Currency;
