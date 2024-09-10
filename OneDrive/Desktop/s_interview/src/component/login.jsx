import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const usenav=useNavigate();
  const [data,setdata]=useState({
    name:"",password:""
  });
  const form=localStorage.getItem("form");
  // console.log(form)

  const Change=()=>{
    usenav('/main');
  }
  useEffect(()=>{
    if(!form){
      usenav('/');
   }
  },[form]);
  const Login=(e)=>{
    e.preventDefault();
    if(data.name==="" || data.password===""){
      alert("enter the details")
    }else{
      const d=JSON.parse(form);
      // console.log(JSON.parse(form));
      if(data.name!==d.name || data.password!==d.password){
        alert("invalid Crentials");
      }else{
           Change();
      }

    }

  }
   return(
    <div className="register">
      <form action="" className="reg">
        <h1>Login</h1>
      <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Your Name" id="name" onChange={
          (e)=>{
            setdata({...data,name:e.target.value})
          }
        }/>
        <label htmlFor="password">Password</label>
         <input type="password" placeholder="Enter Your password"  id="password" 
         onChange={(e)=>{
          setdata({...data,password:e.target.value})
         }}/>
         <button type="submit" onClick={Login}>Login</button>
      </form>
    </div>
   )
}
export default Login;