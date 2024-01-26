import React, {useState} from 'react'

export default function TestForm(props) {
  
  const handleUpClick=()=>{
    //console.log('Uppercase was clicked' +text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  }
  const handleLoClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  }
  const handleClearClick=()=>{
    let newText='';
    setText(newText);
    props.showAlert("Text Cleared","success");
  }
  const handleOnChange= (event) =>{
    //console.log("On change");
    setText(event.target.value);
  }
  const handleCopy=()=>{
    //console.log("i am copy");
     //var text=document.getElementById("myBox");
     //text.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard","success");
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces are removed","success");
  }
  const[text,setText]=useState('');
//text="new text"//wrong way to change state
//setText("new text");//correct way
  return (
    <>
    
    <div className="container" style={{color: props.mode==='dark'?'white':''}}>
        <h1 className='mb-4' >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e' : 'white',color: props.mode==='dark'?'':'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Removing Extra Spaces</button>
        
    </div>
    <div className="conatainer my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview."}</p>

    </div>
    </>
    
        
            

  )
}
