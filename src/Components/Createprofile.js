import React, { useState } from 'react';
import './CreateProfile.css';

const CreateProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form values and create user profile
  };

  return (
    <form className="create-profile" onSubmit={handleSubmit}>
      <h1>Create your profile</h1>
      {error && <p className="error">{error}</p>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="mobileNumber">Mobile number:</label>
      <input
        type="tel"
        id="mobileNumber"
        value={mobileNumber}
        onChange={(event) => setMobileNumber(event.target.value)}
      />
      <button type="submit">Create profile</button>
    </form>
  );
};

export default CreateProfile;