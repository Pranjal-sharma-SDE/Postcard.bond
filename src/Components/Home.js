import React from 'react';
import './Home.css';
import ShowPostcard from './ShowPostcard';

const postcard = {
  senderName: 'Jane Doe',
  senderAddress: '456 Main St, Anytown USA',
  receiverName: 'John Smith',
  receiverAddress: '123 Main St, Anytown USA',
  imageUrl: 'https://thumbs.dreamstime.com/b/sunrise-over-beach-cancun-beautiful-mexico-40065727.jpg',
  imageAltText: 'Beach scene',
  note: 'Wish you were here!',
};
const Home = () => {
    return (
      <div className="home">
        <h1>Welcome to Postcard.bond!</h1>
        <p>
          Create and send physical postcards to your friends and loved ones. Choose from a selection of images generated by our machine learning model or upload your own.
        </p>
        <button><a href='/postcard'>Create a postcard</a></button>
        <ShowPostcard postcard={postcard} />
      </div>
    );
  };
  
  export default Home;
  
  
  
  
  
