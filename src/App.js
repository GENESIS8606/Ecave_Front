import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Accounts from './pages/Accounts.jsx';
import Analytics from './pages/Analytics.jsx';
import Comment from './pages/Comment.jsx';
import AddProduct from './pages/AddProduct.jsx';
import ProductList from './pages/ProductList.jsx';
import Addaccounts from './pages/accounts/Addaccounts.jsx';
import Viewaccounts from './pages/accounts/Viewaccounts.jsx';
import Login from './components/login/Login.jsx';
import About from './pages/About.jsx';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // You can implement your authentication logic here
    // For now, I'm just setting it to true to simulate a successful login
    setAuthenticated(true);
  };

  return (
    <Router>
      {!authenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <Sidebar>
            <Routes>
             <Route path="/about" element={<About/>} />
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/accounts" element={<Accounts />} />
              <Route path="/comment" element={<Comment />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/productList" element={<ProductList />} />
              <Route path="/accounts/addaccounts" element={<Addaccounts />} />
              <Route path="/accounts/viewaccounts" element={<Viewaccounts />} />
            </Routes>
          </Sidebar>
        </div>
      )}
    </Router>
  );
};

export default App;
