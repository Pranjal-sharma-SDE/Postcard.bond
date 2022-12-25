import React, { useState } from 'react';
import './Postcard.css';
import {Configuration,OpenAIApi } from "openai";
import { useActionData } from 'react-router-dom';






const Postcard = () => {
  const [prompt, setPrompt] = useState('');
  const [result,setresult]=useState([]);
  const [selectedImage,setselectedImage]=useState('');
  const [num,setnum]=useState(6);
  const Config = new Configuration({
    apiKey :"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"
  }
  )
  const openai =new OpenAIApi(Config);
  console.log(prompt)

  const generate =async(e)=>{
    e.preventDefault();
    const response = await openai.createImage({
      prompt: prompt,
      n: num,
      size: "256x256",
    });
   // image_url = response.data.data[0].url;
   console.log(response)
   /*setresult(response.data.data[0].url) */
   const res =response?.data.data?.map(dt=>{
    return(dt.url)
   })
   setresult(res);
  }
 
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
 const handlenum=(e)=>{
  const x=Number(e.target.value)
if(x>6)
{
  console.log(e.target.value);
  if(window.confirm('It will cost additional Charges')){
    setnum(x);
  }
}
  
 }
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Validate form values and create postcard
    const response = await fetch("http://localhost:5000/api/createpostcard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({senderName:formState.senderName,senderAddress:formState.senderAddress,receiverName:formState.receiverName,receiverAddress:formState.receiverAddress,imageUrl:selectedImage,note:formState.note}),
    });
    const json = await response.json()
    console.log(json)
    if(!json.success){
      alert('Enter Valid Value');
    }
  };

  return (
    <div>
   
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
     
      <label htmlFor="URL">Image:</label>

      <input
        type="text"
        id="imageprompt"
        value={prompt}
        onChange={(event) => setPrompt( event.target.value )}
      />
      <input
        type="number"
        id="num"
        defaultValue={num}
        onChange={handlenum}
  />
      <button onClick={generate}> Generate Image</button>
    <><br></br></>
      <button type="submit">Create postcard</button>
      
    
    </form>
    
     
    {!!result? result.map(url=><img key={url} src={url} onClick={()=> setselectedImage(url) }/>):<p>Comming soon ...</p>}

    </div>
    
  );
};

export default Postcard;