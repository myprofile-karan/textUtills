import './App.css';
import Header from './components/Header';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
  

function App() {
  const [Mode, setMode] = useState('light');

  const toggleMode = ()=> {
    if(Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'

    }
  };

  return (
    <>
      <Header title="Hello World" toggleMode={toggleMode} mode={Mode} nav="Home"/>
      {/* <Header title="LOGO" nav="NewHome" />    another Header made by props */}
      {/* <Card/> */}
      {/* <div className='main'> 
        {
          movies.map((element, index)=> {
            return(
              <Card key={index} title={element.title} image={element.images} />
            )
          })
        }
      </div>  */}
      <TextForm heading="Convert to uppercase" mode={Mode} />
      {/* <DarkMode/> */}
      {/* <Basicform /> */}
      {/* <Counter /> */}
    </>
  );
};

export default App;
