import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('Enter text here');

    const handleUpCLick = () => {
        setText(text.toUpperCase())
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    const handleCLearClick=()=>{
        setText("")
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3 my-3" >
                    <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundcolor: props.mode==='light'? 'grey': 'white'}}  onChange={handleOnChange} value={text} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpCLick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleCLearClick}>Clear</button>
                <button className="btn btn-primary mx-3" onClick={speak}>SPEAK</button>
            </div>
            <div className="container my-3" >
                <h1>Your text Summary</h1>
                <p>{(text.split(" ").length-1)} and  {text.length} characters</p>
                <p>{(0.008 * text.split(" ").length)} minutes will be required to read above text</p>
                <h2>Preview : </h2>
                <p>{text}</p>
            </div>

        </>

    )
}
