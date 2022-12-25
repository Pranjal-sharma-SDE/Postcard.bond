import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import './Signin.css';

const Signin = () => {
  const [formState, setFormState] = useState({
   
    email: '',
    password: '',
    error: '',
    
  });
  let navigate =useNavigate()
    const handleSignin = async(event) => {
      event.preventDefault();
      // Validate form values and sign up user
      const response = await fetch("http://localhost:5000/api/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email:formState.email,password:formState.password}),
      });
      const json = await response.json()
      console.log(json)
      if(!json.success){
        alert('Enter Valid Value');
      }
      if(json.success){
        navigate("/");
      }
    };

  return (
    <form className="signin" onSubmit={handleSignin}>
      <h1>Sign in to Postcard.bond</h1>
      {formState.error && <p className="error">{formState.error}</p>}
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
      <button type="submit">Sign in</button>
      <Link to={"/"}> Home</Link>
      <nav>
      <Link to ={"/signup"}>New User</Link>
      </nav>
    </form>
  );
};

export default Signin;