import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  /*
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [address, setAddress] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  
*/
const [formState, setFormState] = useState({
  name: '',
  email: '',
  password: '',
  error: '',
  address: '',
  mobileNumber: '',
});

  const handleSignup = async(event) => {
    event.preventDefault();
    // Validate form values and sign up user
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name:formState.name,mobile:formState.mobileNumber,email:formState.email,password:formState.password,address:formState.address}),
    });
    const json = await response.json()
    console.log(json)
    if(!json.success){
      alert('Enter Valid Value');
    }
  };

  return (
    <form className="signup" onSubmit={handleSignup}>
      <h1>Sign up for Postcard.bond</h1>
      {formState.error && <p className="error">{formState.error}</p>}
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
    value={formState.name}
    onChange={(event) => setFormState({ ...formState, name: event.target.value })}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={formState.email}
    onChange={(event) => setFormState({ ...formState, email: event.target.value })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={formState.password}
    onChange={(event) => setFormState({ ...formState, password: event.target.value })}
      />

<label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={formState.address}
        onChange={(event) => setFormState({ ...formState, address: event.target.value })}
      />
      <label htmlFor="mobileNumber">Mobile number:</label>
      <input
        type="tel"
        id="mobileNumber"
        onChange={(event) => setFormState({ ...formState, mobileNumber: event.target.value })}
        />
      <button type="submit">Sign up</button>
      <Link to ={"/signin"}> Already the user</Link>

    </form>
  );
};

export default Signup;