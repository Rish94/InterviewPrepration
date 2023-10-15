import React, { useState } from 'react'
import Logo from "../Images/logo.png"

import '../Authentication/login.css'

import SignUp from '../Authentication/SignUp'

import {useHistory} from 'react-router-dom';







export default function Loginauth() {

  const history = useHistory();

  const [form,setForm] = useState({});


  const [data,setData] = useState({});


  function handleForm(e) {
   

    setForm({//use [] for key
      ...form, //purane value pure rahenge esse
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit= async (e)=>{
    //e.preventDefault();
    //console.log(e.target.value, e.target.name); nmae + username
    e.preventDefault();
    const response = await fetch('/login',{
      // method:'GET'
      method:'POST',
      body:JSON.stringify(form), //data form he bhjne ke leye string me bhjke
      headers:{//kesa type ka data send kr rahe he vo
        'content-type':'application/json'
      }
    })
    //console.log(response);


    const data1 = await response.json();
    setData(data1);

    {if(response===null){
      alert("Errr")
    }else{
      history.push('/');
     
    }}
  }


  return (
    <>

      <div id="login-content">
        {/* <p>{JSON.stringify(form)}</p> */}
        <div id='maindivision'>

          <img src={Logo} id='logogla'></img>
          <br />
          <span id="head">Please Login to your account</span>
          <div id='details'>
            <br />
            <form id="form" onSubmit={handleSubmit}>
              <label id="head">Enter User Name</label>
              <input type="text" name="username" placeholder='Username' onChange={handleForm}></input><br></br>
              <label id="head">Enter Password</label>
              <input type='password' name="password" placeholder='Password' onChange={handleForm}></input><br></br>
              <button id="loginbutton" type='submit'>Login</button>

              <span id="head">Dont Have an Account ? <a href='/SignUp' id="signuplink">Sign Up</a></span>
            </form>
          </div>


        </div>
      </div>


    </>
  )
}
