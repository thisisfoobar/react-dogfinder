import { Navigate, BrowserRouter } from "react-router-dom";
import "./App.css";
import DogRoutes from "./DogRoutes";
import Nav from "./Nav";
import myData from "./data/db.json";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav dogs={myData.dogs}/>
        <DogRoutes dogs={myData.dogs}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
