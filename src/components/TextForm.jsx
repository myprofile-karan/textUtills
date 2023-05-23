import React, {useState} from 'react';

export default function TextForm(props) {

  const handleOnClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event)=> {
    setText(event.target.value)
  };

  const [text, setText] = useState('enter text here');
  
  return (
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">enter text here</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} rows="7"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>Uppercase</button>
    </div>
  );
};
