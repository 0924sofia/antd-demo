import './App.css';
import Login from './components/Login';
import { Radio } from 'antd';


function App() {
  return (
    <div className="App">
      <Radio>A</Radio>
      <Radio>B</Radio>
      <Radio>C</Radio>
      <Login/>
    </div>
  );
}

export default App;
