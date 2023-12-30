// import logo from './logo.svg';
import './App.css';
import { Functionformvalid } from './Crud/Functionformvalid/Functionformvalid';
import  {Classformvalid} from './Crud/Classformvalid/Classformvalid'
function App() {
  return (
    <div className="App">
      <h1>Class component</h1>
      <Classformvalid/>
      <hr></hr>
      <h1>Function component</h1>
      <Functionformvalid/>
    </div>
  );
}

export default App;
