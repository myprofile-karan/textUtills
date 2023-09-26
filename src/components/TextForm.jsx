import React, {useState} from 'react';

export default function TextForm(props) {
  const handleupClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleloClick = ()=> {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event)=> {
    setText(event.target.value)
  };
  const clearText = () =>{
    setText("");
  }

  const [text, setText] = useState('');
  
  return (
      <div className="container" style={{marginTop:'100px', color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">enter text here</label>
          <textarea className="form-control" value={text} onChange={handleOnChange} rows="7" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleupClick}>Uppercase</button>
        <button className="btn btn-primary ms-3" onClick={handleloClick}>Lowercase</button>
        <button className="btn btn-primary ms-3" onClick={clearText}>Clear</button>
      
        <h4>your text summary</h4>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>  
  );
};
