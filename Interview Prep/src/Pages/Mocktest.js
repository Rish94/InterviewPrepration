import React, { useState,useEffect } from 'react'

import ContentHeader from '../ContentPages/ContentHeader';

import '../CSS/mocktest.css'
import e from 'cors';

export default function Mocktest() {

  const [data,setData] = useState([]);

  // const getdata = async ()=>{ 
  //   const res = await fetch('http://localhost:8080/mocktest',{
  //   method:'GET'
  // })
  // //console.log(getdata);
  // const da = await res.json();
  // //console.log(data);
  // setData(da);
  // }

  // useEffect(()=>{
  //   getdata();
  // })



  return (
    <>
    <ContentHeader/>

    {/* <div>

    {data.map((doc) =>(
      <>
      <h3 id="question">{doc.qno + " " + doc.question}</h3>
      <form>
        <input type="radio"  name="q_option" id="option1" value={doc.option1}></input><label>{doc.option1} </label>
        <input type="radio" name="q_option" id="option2" value={doc.option2}></input><label>{doc.option2}</label>
        <input type="radio" name="q_option" id="option3" value={doc.option3}></input><label>{doc.option3}</label>
        <input type="radio" name="q_option" id="option4" value={doc.option4}></input><label>{doc.option4}</label>
       
      </form>
      <input type='button' value='finish' onClick={calculate()}></input>

      
      </>
      
    ))}
    </div> */}

    Go to website
    

    </>
  )
}


 {/* <div class="modal-header">
                <h3>Q. What does HTML stands for?</h3>
            </div>
            <div class="modal-body">
                <div class="col-xs-3 5"></div>
                <div class="quiz" id="quiz" data-toggle="buttons">
                    <label class="element-animation1 btn btn-lg btn-danger btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="1"></input>HyperText Markup Language.</label>
                    <label class="element-animation2 btn btn-lg btn-danger btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="2"></input>HighText Markup Language.</label>
                    <label class="element-animation3 btn btn-lg btn-danger btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="3"></input>HyperText Markdown Language.</label>
                    <label class="element-animation4 btn btn-lg btn-danger btn-block"><span class="btn-label"><i class="glyphicon glyphicon-chevron-right"></i></span> <input type="radio" name="q_answer" value="4"></input>None of the above.</label>
                </div>
            </div> */}
