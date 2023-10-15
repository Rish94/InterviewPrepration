import React from 'react'
import '../CSS/Navbar.css'

import Logo from "../Images/logo.png"
import Grow from "../Images/grow.png"

import login from '../Authentication/Login'

import { useHistory } from 'react-router-dom'






export default function Navbar() {

    return (
        <>

            <nav id="navbar">
                <div>
                    <img id="logo_image" src={Logo}></img>
                </div>
                <div>

                    <span id="interview">INTERVIEW PREPRATION</span>


                </div>
                <div id="login">
                    <a id="buttonlogin" href='/login'>Login</a>
                    <a id="buttonlogin" href='/signup'>Sign Up</a>
                </div>

            </nav>
            <div id="menu">
                <div id="menulist">

                    <a href='/interviewtip'>INTERVIEW TIPS</a>
                    <a href='/lastyearquestions'>LAST YEAR COMPANIES QUESTIONS</a>
                    <a href='/mocktest'>MOCK TEST</a>
                    <div id="select">
                        <label>SUBJECTS &nbsp;</label>
                        <select>
                            <option value="JAVA"> JAVA
                            </option>
                            <option value="DBMS"> DBMS
                            </option>
                            <option value="C"> C
                            </option>
                            <option value="OOPS"> OOPS
                            </option>
                            <option value="SQL"> SQL
                            </option>
                            <option value="PYTHON"> PYTHON
                            </option>
                            <option value="OS"> OS
                            </option>
                            <option value="CN"> CN
                            </option>
                        </select>
                    </div>
                    <a href='/pdf'>Resume Format</a>


                </div>
                <div>



                    <input class="textsearch" type="search" placeholder="Search" aria-label="Search" />
                    <button class="buttonsearch" type="submit">Search</button>
                </div>

            </div>
            <img id="grow" src={Grow}></img>
            <hr></hr>

        </>
    )
}
