import React, { useState, useEffect } from 'react';
import './Viewaccounts.css';  // Corrected import

const Viewaccounts = () => {
  // State to store the list of accounts
  const [accounts, setAccounts] = useState([]);

  // Fetch accounts data (assuming you have an API to fetch accounts)
  useEffect(() => {
    // You need to replace this with your actual API call or data fetching logic
    // For demonstration purposes, I'm using a static list here
    const dummyAccounts = [
      // { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', sex: 'male', phoneNumber: '1234567890', city: 'Sample City', state: 'Sample State' }
    ];

    setAccounts(dummyAccounts);
  }, []);

  return (
    <div className="view-accounts">
      <h1>View Accounts</h1>
      {/* Display the list of accounts */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Sex</th>
            <th>Phone Number</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              <td>{account.email}</td>
              <td>{account.sex}</td>
              <td>{account.phoneNumber}</td>
              <td>{account.city}</td>
              <td>{account.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Viewaccounts;
