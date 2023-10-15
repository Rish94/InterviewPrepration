import React,{useEffect,useState} from 'react'

import ContentHeader from './ContentHeader'

import "../CSS/sql.css"


export default function SQL() {

  const [data,setData] = useState([]);

  const getData = async ()=>{
    const res = await fetch('/sql-questions',{
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
