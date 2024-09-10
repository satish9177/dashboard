import {useEffect, useState } from "react";
import Display from "./List";
import { useNavigate } from "react-router-dom";

const Main=()=>{
  const form=localStorage.getItem("form");
  // console.log(form)

   const usenav=useNavigate();
  useEffect(()=>{
    if(!form){
      usenav('/login');
   }

  },[form]);
  const [list,setlist]=useState([]);
  const[data,setdata]=useState({
    category:"",language:"",genre:"",sort:""
  });
   const fetched=async()=>{
      const response=await fetch('https://hoblist.com/api/movieList',{
        method:'post',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body:JSON.stringify({...data})
      });
      const {result}=await response.json();
      if(response.ok){
        console.log(result);
        setlist(result); 
      }else{
        alert('data not posted');
      }
    }
     
  const Send=async(e)=>{
    e.preventDefault();
    if(data.category===""){
      alert('enter category')
    }else{
       await fetched();}
  }
  const [visible,setvisible]=useState(false);
  return(
    <>
    <header className="head">
    <form action="submit" className="search-form">
        
        <input type="text" placeholder="enter Category" value={data.category} onChange={(e)=>setdata({...data,category:e.target.value})}/>
        
        <input type="text" placeholder="enter Language" value={data.language} onChange={(e)=>setdata({...data,language:e.target.value})} />
         
        <input type="text" placeholder="enter Genre" value={data.genre} onChange={(e)=>setdata({...data,genre:e.target.value})} />
     
        <input type="text" placeholder="Sort By" value={data.sort}  onChange={(e)=>setdata({...data,sort:e.target.value})} />
        <button type="submit" onClick={Send}>Search</button>
      </form>
       <button onClick={()=>setvisible(!visible)}>Company Info</button>
       {
        visible &&<>
         <div className="company-info">
          <p> Company: Geeksynergy Technologies Pvt Ltd</p>
        <p>Address: Sanjayanagar, Bengaluru-56</p>
        <p>Phone: XXXXXXXXX09</p>
        <p>Email: XXXXXX@gmail.com</p>
         </div>
        </>
       }
    </header>
    
    <div className="search">
      {
        list?.length>0?<main className="data-list" >
        {
          list.map((l,i)=>{
            return <Display key={i} title={l.title} poster={l.poster} language={l.language} stars={l.stars} director={l.director} genre={l.genre} pageviews={l.pageViews} voted={l.totalVoted}/>
          })
}</main>:<div className="no-search">
  no search found..
</div>
       }
       </div>
      </>
  )
}
export default Main;