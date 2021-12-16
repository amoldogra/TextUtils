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

  const handleClearCick =()=>{
    let newText="";
    setText(newText);
  }
   const handleCopyClick =()=>{
     var text = document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);
   }

  const handleOnChange= (event)=>{
    // console.log("on Change");
     setText(event.target.value);    
  }
  const [text, setText] = useState('Enter text here');
    return (
      <>
        <div>
         <h1 className='mb-4'>{props.heading}</h1> 
         <div className="mb-3">
         <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div> 
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearCick}>Clear Text</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button> 
        </div>
        <div className="container my-3">
          <h1>Your Text Summary</h1>
          <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} Characters</p>
        </div>
        <div className="container">
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
        </>
    )
}
 