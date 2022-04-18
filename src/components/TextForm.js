import React , {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked"+text)
        let newText =text.toUpperCase();
        setText(newText)

    }
    const handleClearClick = () => {
      // console.log("uppercase was clicked"+text)
      let newText =' ';
      setText(newText)

  }
  const handleCopy = () => {
    // console.log("uppercase was clicked"+text)
     var text =document.getElementById("myBox");
     text.select();
     navigator.clipboard.writeText(text.value);

}
    const handleLoClick = () => {
      // console.log("uppercase was clicked"+text)
      let newText =text.toLowerCase();
      setText(newText)

  }
    const handleOnChange = (event) =>{
        // console.log("on change")
        setText(event.target.value)

    }
    const [text, setText] = useState(' ');
    // text="new text" ;wrong way to change the state
    // setText("new text"); correct way to change the state
   return (
    <>
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text}  onChange ={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-3" onClick={handleUpClick}> Convert to upper case</button>
<button className="btn btn-primary  mx-3" onClick={handleLoClick}> Convert to lower case</button> 
<button className="btn btn-primary  mx-3" onClick={handleClearClick}> Clear Text</button>
<button className="btn btn-primary  mx-3" onClick={handleCopy}> Copy Text</button>
    </div>
    <div className="container my-3"> 
    <h2>Your text summary </h2>
    <p>{text.split(" ").length }words  and {text.length} characters </p>
    <p>{0.008*text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text}</p>

    </div>
    </>
  )
}
