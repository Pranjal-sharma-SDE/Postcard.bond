import React from 'react';
import './Profile.css';

const Profile = ({ user }) => {
  return (
    <div className="profile">
      <h1>Your profile</h1>
      <div className="user-info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p>Address: {user.address}</p>
        <p>Mobile number: {user.mobileNumber}</p>
      </div>
    </div>
  );
};

export default Profile;