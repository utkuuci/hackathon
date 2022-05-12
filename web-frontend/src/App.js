import React from 'react'
import NavbarComp from './components/NavbarComp';
import Shop from './pages/Shop';
import User from './pages/User';
import ReceiptUser from './pages/ReceiptUser';
import { Routes, Route } from "react-router-dom";
import ReceiptList from './components/ReceiptList';
import receipts from './receipts';

console.log(receipts);
function App() {
  return (
    <div>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<ReceiptList props={receipts} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<User />} />
        <Route path="/receipts/user" element={<ReceiptUser />} />
      </Routes>
    </div >
  );
}

export default App;