import React, { useState } from 'react';
import './Postcard.css';

const Postcard = () => {
  
  const [formState, setFormState] = useState({
    senderName: '',
    senderAddress:'',
    receiverName: '',
    receiverAddress: '',
    error: '',
    imageUrl: '',
    imageAltText: '',
    note:'',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form values and create postcard
    const response = await fetch("http://localhost:5000/api/createpostcard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({senderName:formState.senderName,senderAddress:formState.senderAddress,receiverName:formState.receiverName,receiverAddress:formState.receiverAddress,imageUrl:formState.imageUrl,note:formState.note}),
    });
    const json = await response.json()
    console.log(json)
    if(!json.success){
      alert('Enter Valid Value');
    }
  };

  return (
    <form className="postcard" onSubmit={handleSubmit}>
      <h1>Create your postcard</h1>
      {formState.error && <p className="error">{formState.error}</p>}

      <label htmlFor="senderName">Sender's name:</label>
      <input
        type="text"
        id="senderName"
        value={formState.senderName}
        onChange={(event) => setFormState({ ...formState, senderName: event.target.value })}
      />


<label htmlFor="receiverAddress">Sender's address:</label>
      <input
        type="text"
        id="senderAddress"
        value={formState.senderAddress}
        onChange={(event) => setFormState({ ...formState, senderAddress: event.target.value })}
      />
      <label htmlFor="receiverName">Receiver's name:</label>
      <input
        type="text"
        id="receiverName"
        value={formState.receiverName}
        onChange={(event) => setFormState({ ...formState, receiverName: event.target.value })}
      />
      <label htmlFor="receiverAddress">Receiver's address:</label>
      <input
        type="text"
        id="receiverAddress"
        value={formState.receiverAddress}
        onChange={(event) => setFormState({ ...formState, receiverAddress: event.target.value })}
      />
      <label htmlFor="note">Note:</label>
      <textarea
        id="note"
        value={formState.note}
        onChange={(event) => setFormState({ ...formState, note: event.target.value })}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="imageURL"
        accept="image/*"
        onChange={(event) => setFormState({ ...formState, imageURL: event.target.value })}
      />
      <button type="submit">Create postcard</button>
    </form>
  );
};

export default Postcard;