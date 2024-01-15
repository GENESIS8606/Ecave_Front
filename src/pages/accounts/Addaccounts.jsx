import React, { useState } from 'react';
import './Addaccounts.css';
import { Link } from 'react-router-dom';

const Accounts = () => {
  // State for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform actions with the form data (e.g., send to server or update state)
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      sex,
      phoneNumber,
      city,
      state,
    });
  };

  return (
    <div className="div">
      <h1>Add</h1>
      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          First Name:
          <input  className="input" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
        </label>
        <label className="label">
          Last Name:
          <input className="input" type="text"  value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        </label>
        <label className="label">
          Email:
          <input className="input" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label className="label">
          Sex:
          <select className="input" value={sex} onChange={(e) => setSex(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label className="label">
          Phone Number:
          <input className="input" type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
        </label>
        <label className="label">
          City:
          <input className="input" type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
        </label>
        <label className="label">
          State:
          <input className="input" type="text" value={state} onChange={(e) => setState(e.target.value)}/>
        </label>
        <button className="button" type="submit">
          <b>Submit</b>
       
        </button>
        <br></br>
        <button>
              <Link to="/accounts" className="a">
               <b> Back</b>
              </Link>
            </button>
      </form>
    </div>
  );
};

export default Accounts;
