import React, {  useEffect, useState } from 'react'

const UseEffectLearn = () => {
  const [data, setdata] = useState('Elisha')

  useEffect(() => {
     setdata('Pelumi')
    // console.log('kdjkd');
  FecthData()
  },[data])
  function FecthData() {
    console.log('i have Fecth Data');
  }
    //  const [data, setData]=useState("was up")
    //  const [dat, setDat]=useState("favour")
    // useEffect(() => {
    //   getData()
    //   // console.log('kdjkd');
    // })

  //  async function getData() {
  //     const res = await fetch("http://localhost:4002/getAllProducts")
  //     const data = await res.json()
  //     console.log(data);
  //   }
  //   getData()
    

  return (
    <div>
      <h1>{data}</h1>
      <button >jfj</button>
    </div>
  )
}

export default UseEffectLearn
