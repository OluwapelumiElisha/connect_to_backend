import React, { useState } from 'react'

const FecthData = () => {
    const [inpVal, setinpVal] = useState(   )
        const handlerequest = async() =>{
            const res = await fetch('http://localhost:4001/Music')
            console.log(res);
            const data = await res.json()
            console.log(data);
            data.arr.forEach((el,i)=>{
                demo.innerHTML += `
                <h1>${el.anything}</h1>
                `
            })
        }
   
        const handlepost = async() =>{
            
            try {
                const res = await fetch ('http://localhost:4001/postMusic', {
                    method: 'POST',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify({
                        name: inpVal
                    })
                })
                console.log(res);
                
               
            } catch (error) {
                console.log(error);
            }
        }
  return (
    <div>
        <input type="text" onInput={(e)=> setinpVal(e.target.value)}/>
        <button onClick={handlepost}>Send to sever</button>
      <button onClick={handlerequest}>Make Request to server</button>
      <h1 id='demo'></h1>
    </div>
  )
}

export default FecthData
