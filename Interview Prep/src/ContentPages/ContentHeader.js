import React from 'react'

import Logo from "../Images/logo.png"

export default function ContentHeader() {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  const time = `${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;

  return (
    <>
     <nav id="navbar">
                <div>
                    <img id="logo_image" src={Logo}></img>
                </div>
                <div>

                    <span id="interview"> <span style={{color:"Green",fontFamily:"cursive"}}>Learn</span> More! <span style={{color:"Green",fontFamily:"cursive"}}>Explore</span> More! <span style={{color:"Green",fontFamily:"cursive"}}>Secure</span> Your <span style={{color:"Green",fontFamily:"cursive"}}>JOB</span> </span>


                </div>
                <div>
                  <span style={{color:"Red",fontFamily:"serif"}}>Date: {date}</span>
                  <br></br>
                  <span  style={{color:"Red",fontFamily:"serif"}}>Time: {time}</span>
                </div>

            </nav>

    </>
  )
}
