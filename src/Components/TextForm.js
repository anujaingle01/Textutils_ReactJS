import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        //console.log(" Uppercase was clicked" +text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to UpperCase","success");
    }
    const handleLoClick = ()=>{
        //console.log(" Lowercase was clicked" +text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to LowerCase","success");
    }

    const titleCase = () => {
        let newText = text.toLowerCase().split(' ');
        for(let i=0; i<newText.length; i++) {
          newText[i] = newText[i][0].toUpperCase()+newText[i].slice(1);
        }
        setText(newText.join(' '));
        props.showAlert("Converted to titlecase","success");
      }

    const toggleCase =()=>{
        let newText=text.split('');
        for (let i = 0; i< newText.length; i++) {
            if (newText[i]=== newText[i].toUpperCase()&& newText[i]!== newText[i].toLowerCase()){
                newText[i]= newText[i].toLowerCase();
            }
            else if(newText[i] !== newText[i].toUpperCase()&& newText[i]=== newText[i].toLowerCase()){
                newText[i]= newText[i].toUpperCase();
            }
        }
        setText(newText.join(''));
        props.showAlert("Converted to togglecase","success");
    }

    const handleClearClick = ()=>{
        //console.log(" Lowercase was clicked" +text);
        setText('');
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event)=>{
        //console.log(" On Change " );
        setText(event.target.value)
    }
    const handleCopy = () => {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert(" Copied to ClipBoard ","success");

    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Extra space Removed ","success");

    }
    const[text, setText] = useState('');
    // text = "New Text"; // Wrong Way
    // setText("New Text"); // Right Way

  return (
    <>
    <div className="container">
        <h1 className="mb-4">{props.heading}</h1> 
        <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleUpClick}>Convert to Uppercase</button>        
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleLoClick}>Convert to Lowercase</button>        
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={titleCase}>Convert to TitleCase</button>        
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={toggleCase}>Convert to ToggleCase</button>        
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleClearClick}>Convert to HandleClear</button>        
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleOnChange}>Convert to HandleOnChange</button>        
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleCopy}>Convert to HandleCopy</button> 
        <button disabled={text.length===0} className={`btn btn-${props.mode} mx-1 my-1`} onClick={handleExtraSpaces}>Convert to HandleExtraSpaces</button> 

        {/* <button className = "btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>*/}

    </div> 
    <div className="container my-3">
        <h3> Your Text Summary </h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} = Words and {text.length} = Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read...</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
