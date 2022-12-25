import React, { useState } from 'react';
import {Configuration,OpenAIApi } from "openai";



function Image() {
  const [prompt, setPrompt] = useState('');
  const [result,setresult]=useState([]);
  const [selectedImage,setselectedImage]=useState('');
  const Config = new Configuration({
    apiKey :"Your-Api-key"
  }
  )
  const openai =new OpenAIApi(Config);
  console.log(prompt)

  const generate =async()=>{
    const response = await openai.createImage({
      prompt: prompt,
      n: 6,
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
 
  return (
    <div>
      <h2>Generate Images</h2>
      <textarea
      placeholder='Write the prompt'
      onChange={(e)=> setPrompt(e.target.value)}
      />
      <button onClick={generate}> Generate Image</button>
     
    { /* 
      {!!result
      ?(
        <img src={result} alt={result}/>
      )
      :<p>Comming soon</p>}*/}
      {!!result? result.map(url=><img key={url} src={url} onClick={()=> setselectedImage(url) }/>):<p>Comming soon ...</p>


      }
    {selectedImage }  
    </div>
  );
}
export default Image;
