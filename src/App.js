import './App.css';
import Headers from "./Components/Headers/Headers.jsx";
import Home from "./Components/Home/Home.jsx";


function App() {
  const dishes = [
    {
      id:1,
      name:'plato 1',
      description:'Este es el plato 1',
      price:10
    },
    {
      id:2,
      name:'plato 2',
      description:'Este es el plato 2',
      price:20
    },
    {
      id:3,
      name:'plato 3',
      description:'Este es el plato 3',
      price:15
    }
  ]
  
  return (
    <div className="App">
       <div>
          <Headers /> 
      </div>
      <div>
          <Home dishes={dishes} />
      </div>   
    </div>
  );
}

export default App;
