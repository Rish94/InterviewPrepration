import React from 'react'
import '../CSS/MainPageSection2.css';

import HR from "../Images/hr.png"
import Apptitute from "../Images/apptitute.png";
import Reasoning from "../Images/reasoning.png";
import Verbal from "../Images/verbal.png";
import Tech from "../Images/technical.png";

import SQL from '../ContentPages/SQL';

import {useHistory} from 'react-router-dom';








export default function MainPageSection2() {

    // const onSub = () => {
    //     console.log("Clicked Video");
    // };

    const history = useHistory();
    // // console.log(history);

    // // const navigate  = useRouteMatch();

    // function callFunc(e){
       
    // }

    return (
        <>

            {/* <span> Website under Process == By Rishabh Agarwal thanks!</span> */}
        
            <h5>CONTENT</h5>

            <section id="sections">

                <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={Apptitute}></img>
                    APTITUTE
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/reasoning')
                }}>
                    <img id="logo_image_1" src={Reasoning}></img>
                    REASONING
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/verbal')
                }}>
                    <img id="logo_image_1" src={Verbal}></img>
                    VERBAL ABILITY
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/hr')
                }}>
                    <img id="logo_image_1" src={HR}></img>
                    HR QUESTIONS
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/technical')
                }}>
                    <img id="logo_image_1" src={Tech}></img>
                    TECHNICAL QUESTIONS
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/sql')
                }}>
                    <img id="logo_image_1" src={Tech}></img>
                    SQL
                </button>
            </section>
            <br></br>
            <section id="sections">

            <button id="tokens" onClick={()=>{
                     history.push('/reasoning')
                }}>
                    <img id="logo_image_1" src={Apptitute}></img>
                    PROGRAMING
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/reasoning')
                }}>
                    <img id="logo_image_1" src={Reasoning}></img>
                    REACT JS
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/reasoning')
                }}>
                    <img id="logo_image_1" src={Verbal}></img>
                    MACHINE LEARNING
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/reasoning')
                }}>
                    <img id="logo_image_1" src={HR}></img>
                    DATA STRUCTURES
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/reasoning')
                }}>
                    <img id="logo_image_1" src={Tech}></img>
                    COMPUTER NETWORKS
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={Tech}></img>
                    C++
                </button>
            </section>
            <br></br>
            <section id="sections">

            <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={Apptitute}></img>
                    C PROGRAMMING
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={Reasoning}></img>
                    AWS
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={Verbal}></img>
                    SOFTWARE DEVELOPMENT
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={HR}></img>
                    JAVA
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={Tech}></img>
                    DATABASE
                </button>
                <button id="tokens" onClick={()=>{
                     history.push('/aptitute')
                }}>
                    <img id="logo_image_1" src={Tech}></img>
                    FIREBASE
                </button>
            </section>
            <br></br>
        <div id="manymore">
            <br></br>
            <a id="manymore"> Explore More</a> 
        </div>
        <br></br>

        </>
    )
}
