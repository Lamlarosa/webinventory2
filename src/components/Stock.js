import React, { useState } from 'react';

function Stock() {
  const [stock, setStock] = useState(1);

  const tambahStock = () => setStock(stock + 1);
  const kurangStock = () => {
    if (stock > 0) setStock(stock - 1);
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h4>Jumlah Stock: {stock}</h4>
      <button onClick={kurangStock} style={{ marginRight: '10px' }}>
        Kurangi
      </button>
      <button onClick={tambahStock}>Tambah</button>
    </div>
  );
}

export default Stock;
