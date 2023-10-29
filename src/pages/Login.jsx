import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState('')
    const navigate =useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth){
        navigate('/');
      }else{
        navigate('/login');
      }
    },[])
    const handleLogin = async(e)=>{
        e.preventDefault();
        let result = await fetch('http://localhost:5000/login',{
          method:'post',
          body:JSON.stringify({email, password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
        result =await result.json();
        console.log(result.message)
        setErr(result.message);
        if(result.name){
          localStorage.setItem('user', JSON.stringify(result));
          navigate('/')
        }
       
    }
  return (
    <div className="container">
      
      <form onSubmit={handleLogin}>
      <span>{err}</span>
        <div className="input-div">
          <input type="email" placeholder="Enter Email"  value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className="input-div">
          <input type="password" placeholder="Enter Password"   value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button type="submit" id="sbtbtn">Login</button>
      </form>
    </div>
  );
};
export default Login;
