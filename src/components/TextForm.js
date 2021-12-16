import React,{useState} from 'react'                       // console.log() used to check the functionality of web application.

export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("UpperCase Clicked:" + text);
    let newtext = text.toUpperCase();
    setText (newtext);
  }

  const handleLowClick=()=>{
    //console.log("Lowe Clicked:"+ text);
    let newText = text.toLowerCase();
    setText(newText);
  }

  const handleOnChange= (event)=>{
    // console.log("on Change");
     setText(event.target.value);    
  }
  const [text, setText] = useState('Enter text here');
    return (
        <div>
         <h1>{props.heading}</h1> 
         <div className="mb-3">
         <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div> 
          <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary my-1" onClick={handleLowClick}>Convert to Lowercase</button>
        </div>
    )
}
 