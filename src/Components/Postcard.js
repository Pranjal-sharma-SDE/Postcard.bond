import React, { useState } from 'react';
import './Postcard.css';

const Postcard = () => {
  const [receiverName, setReceiverName] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [note, setNote] = useState('');
  const [image, setImage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form values and create postcard
  };

  return (
    <form className="postcard" onSubmit={handleSubmit}>
      <h1>Create your postcard</h1>
      {error && <p className="error">{error}</p>}
      <label htmlFor="receiverName">Receiver's name:</label>
      <input
        type="text"
        id="receiverName"
        value={receiverName}
        onChange={(event) => setReceiverName(event.target.value)}
      />
      <label htmlFor="receiverAddress">Receiver's address:</label>
      <input
        type="text"
        id="receiverAddress"
        value={receiverAddress}
        onChange={(event) => setReceiverAddress(event.target.value)}
      />
      <label htmlFor="note">Note:</label>
      <textarea
        id="note"
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={(event) => setImage(event.target.files[0])}
      />
      <button type="submit">Create postcard</button>
    </form>
  );
};

export default Postcard;