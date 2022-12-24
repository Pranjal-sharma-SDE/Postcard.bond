import React from 'react';
import './ShowPostcard.css';

const ShowPostcard = ({ postcard }) => {
  return (
    <div className="show-postcard">
      <div className="sender-info">
        <h2>From:</h2>
        <p>{postcard.senderName}</p>
        <p>{postcard.senderAddress}</p>
      </div>
      <div className="receiver-info">
        <h2>To:</h2>
        <p>{postcard.receiverName}</p>
        <p>{postcard.receiverAddress}</p>
      </div>
      <div className="image-container">
        <img src={postcard.imageUrl} alt={postcard.imageAltText} />
      </div>
      <div className="note">
        <p>{postcard.note}</p>
      </div>
    </div>
  );
};

export default ShowPostcard;