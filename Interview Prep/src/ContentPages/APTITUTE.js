import React,{useEffect,useState} from 'react'


import ContentHeader from './ContentHeader'



import "../CSS/aptitute.css"

import ContentSide from "./ContentSide"

export default function APTITUTE() {

  const [data,setData] = useState([]);

  const getData = async ()=>{
    const res = await fetch('/Aptitute-questions',{
      method:'GET'
    })
    const data = await res.json();
    setData(data);
  }

  useEffect(()=>{
    getData();
  })



  return (
    <>
    <ContentHeader/>
    <div id="Question">
    {data.map((doc)=>(
    <>
      <h7>{doc.qno + ". " +  doc.question + " ?"}</h7>
      <br></br>
      <span id="Question">Ans: </span><span id="answer">{doc.answer}</span>
      <br></br>
      <br></br>
    </>
    ))}
    </div>
    </>
  )
}
