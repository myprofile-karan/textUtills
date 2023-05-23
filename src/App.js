import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import TextForm from './components/TextForm';
import movies from './movie.json';

function App() {
  return (
    <>
      <Header title="Hello World" nav="Home"/>
      {/* <Header title="LOGO" nav="NewHome" />    another Header made by props */}
      {/* <Card/> */}
      <div className='main'>
        {
          movies.map((element, index)=> {
            return(
              <Card key={index} title={element.title} image={element.images} />
            )
          })
        }
      </div>
      <TextForm heading="Convert to uppercase"/>
    </>
  );
};

export default App;
