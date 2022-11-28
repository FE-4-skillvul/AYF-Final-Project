import axios from 'axios'
import React, { useState } from 'react'

function Upload() {
  const [image, setImage] = useState("")
  function handleImg(e){
    console.log(e.target.files)
    setImage(e.target.files[0])
  }
  function handleAPI(){
    const formData = new FormData()
    formData.append('image', image)
    axios.post("https://63686402edc85dbc84e5d542.mockapi.io/profile", formData).then((res)=>{
      console.log(res);
    })
  }
  return (
    <div>
        <input type="file" name='file' onChange={handleImg} />
        <button onClick={handleAPI}>Submit</button>
    </div>
  )
}

export default Upload