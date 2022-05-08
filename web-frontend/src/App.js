import React from 'react'
import NavbarComp from './components/NavbarComp';
import ReceiptList from './components/ReceiptList';
import receipts from './receipts';

console.log (receipts);
function App() {
  return (
    <div>
      <NavbarComp/>
      <ReceiptList props={receipts}/>
    </div>
  );
}

export default App;
