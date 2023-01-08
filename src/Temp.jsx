import React,{useState} from 'react'
// import "./App.css"
import Axios from 'axios'

const Temp = () => {

const [txt,setinp]=useState('')
const[temof,settempof]=useState('')


const Search=async()=>{

await Axios.get(`https://api.weatherapi.com/v1/current.json?key=9e76829c389745b79df111616230801&q=${txt}`)
.then((res)=>{

console.log(res.data.current.temp_c)
settempof(res.data.current.temp_c)

})
.catch((err)=>{
    console.log(err)
})

}






  return (
    <>
    <section className='sec'>
        <div className='top'>
            <input type="text" onChange={(e)=>setinp(e.target.value)}/>
            <button onClick={Search}>Search</button>
        </div>
        <div className='btm'>
            <span className='deg'>{temof} deg celius</span>
        </div>
    </section>
    </>
  )
}

export default Temp