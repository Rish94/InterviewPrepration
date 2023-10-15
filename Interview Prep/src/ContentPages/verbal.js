import React,{useEffect,useState} from 'react'
import ContentHeader from './ContentHeader'


import "../CSS/sql.css"

export default function Verbal() {

  const [data,setData] = useState([]);

  const getData = async ()=>{
    const res = await fetch('/VerbalAbility-questions',{
      method:'GET'
    })
    const data = await res.json();
    setData(data);
    

    //print data like this
    // data.map((doc)=>{
    //   console.log(doc.question);
    //   console.log(doc.answer);
    // })
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
