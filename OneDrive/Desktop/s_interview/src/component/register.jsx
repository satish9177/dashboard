import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register=()=>{
  const useNav=useNavigate();
  const [form,setform]=useState({
    name:"",email:"",number:"",password:"",profession:""
  });
  function ValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);}
    function ValidNumber(email) {
      const regex =/^\+?[1-9][0-9]{7,14}$/;
      return regex.test(email);}
      function ValidName(email) {
        const regex =/^[A-Za-z][A-Za-z0-9_]{3,29}$/;
        return regex.test(email);}
        const Change=()=>{
          useNav('/login');
        }
      // "^[A-Za-z][A-Za-z0-9_]{7,29}$";
  const SignUp=(e)=>{
    e.preventDefault();
    // console.log(ValidNumber(form.number));
    if(!ValidName(form.name) || !ValidEmail(form.email) || form.password==="" || !ValidNumber(form.number)){
      alert("enter the details")
    }else{
      localStorage.setItem("form",JSON.stringify(form));
      Change();
    }
  }
  // console.log(form);
   return(
    <div className="register">
      
       <form action="submit"  className="reg" >
       <h1>Sign Up</h1>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="Enter Your Name" value={form.name} id="name"
         onChange={(e)=>{
          setform({...form,name:e.target.value});
        }}/>
        <label htmlFor="email">Email</label>
        <input type="email" placeholder="Enter Your email" value={form.email} id="email"
         onChange={(e)=>{
          setform({...form,email:e.target.value});
       }}/>
        <label htmlFor="number">Phone Number</label>
        <input type="text" placeholder="Enter Your number" value={form.number} id="number"
         onChange={(e)=>{
          setform({...form,number:e.target.value});
        }} />
         <label htmlFor="password">Password</label>
         <input type="password" placeholder="Enter Your password" value={form.password} id="password"
          onChange={(e)=>{
            setform({...form,password:e.target.value});
         }} />
         <label htmlFor="">Profession</label>
         <select value={form.profession} onChange={(e)=>
            setform({...form,profession:e.target.value})
          }>
          <option value="web developer"  >web developer</option>
          <option value="software developer"  >software developer</option>
          <option value="frontend developer"  >frontend developer</option>
          <option value="backend developer"  >backend developer</option>
         </select>
         <button type="submit" onClick={SignUp} >Sign Up</button>
       </form>
    </div>
   )
}
export default Register;