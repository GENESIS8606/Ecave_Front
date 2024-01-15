import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Accounts.css';
import Addaccounts from './accounts/Addaccounts';
import Viewaccounts from './accounts/Viewaccounts';

const Accounts = () => {
  return (
    <div className="div">
      <h2 className="h2">Accounts</h2>
      <nav className="nav">
        <ul className="ul">
          <li className="li">
            {/* Updated the 'to' prop */}
            <button>
              <Link to="/accounts/addaccounts" className="a">
                Add Accounts
              </Link>
            </button>
          </li>
          <li className="li">
            <button>
              <Link to="/accounts/viewaccounts" className="b">
                <b>View Accounts</b>
              </Link>
            </button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/accounts/add" element={<Addaccounts />} />
        <Route path="/accounts/view" element={<Viewaccounts />} />
        {/* Add a similar Route for the ViewAccounts component */}
        {/* <Route path="/accounts/view" element={<ViewAccounts />} /> */}
      </Routes>
    </div>
  );
};

export default Accounts;
