import React, { useState } from 'react'

const Image = () => {
    const [imgSrc, setimgSrc] = useState();
    function handleChange(e) {
        const file = e.target.files[0]
        console.log(e.target.files[0]);
        const reader = new FileReader();
        if (file) {
            reader.onload = function (event){
                setimgSrc(event.target.result)
            }
            reader.readAsDataURL(file)
        }
    }
  return (
    <div>
      <input type="file" onChange={handleChange}/>
      <img src={imgSrc} alt="" className='w-[300px] h-[300px]border-9' />
    </div>
  )
}

export default Image


// User54321lolol 03D030
// pagespeed insighq
// webp 
