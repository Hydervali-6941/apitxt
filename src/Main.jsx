
import React,{useState,useEffect} from "react"
import   Axios  from 'axios'
import { Link } from "react-router-dom"


const Main = () => {

  
  const[arr,setarr]=useState([])
  



  





const bbcnews=async()=>{


await Axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=dbd5d06470d04904bdea12451c84896c')
.then((res)=>{
    
    
  console.log(res.data.articles)
  setarr(res.data.articles)
})

.catch((err)=>console.log(err))



}


const techcrunch=async()=>{

  await Axios.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=dbd5d06470d04904bdea12451c84896c')
  .then((res)=>{
    
    
    console.log(res.data.articles)
    setarr(res.data.articles)
  })

  .catch((err)=>console.log(err))

}





useEffect(() => {
 
  

  // fetechapi();


}, )





  return (
    <>
   <section className="main">
    <div className="hdr">
      <span>
        <Link to="/weather">Temparature</Link>
        <span onClick={bbcnews}>BBc</span>
        <span onClick={techcrunch}>techcrunch</span>
      </span>

    </div>
    <div className="crd">
      {arr.map((value,index)=>
        <div className="msg" key={index}>
        <span><img src={value.urlToImage} alt="" /></span>
             <span><h1>{value.author}</h1></span>
             <h3>{value.description}</h3>
             
             
              </div>
      )



      }

      
    </div>
    
   </section>
    
    
    </>
  )
}

export default Main