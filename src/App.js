import "./App.css";
import React ,{useState} from "react";
function App() {
const [result, setResult] = useState("");
const handleClick = (e) => {
setResult(result.concat(e.target.name));
}
const handleResult = () => {
  try {
    setResult(eval(result).toString());
  } catch (error) {
    console.log(error);
  }
}
  return (
    <div className="App">
      <div className="container">
        <div className="item-2">
          <input type="text" className="result" value={result} onChange={setResult}/>
        </div>
        <button className="item-3 btn btn-action" onClick={()=>{setResult("")}}>Clear</button>
        <button className="item-4 btn btn-action" onClick={()=>{setResult(result.slice(0 , -1))}}>C</button>
        <button name="/" className="item-5 btn btn-action" onClick={handleClick}>/</button>
        <button name="7" className="item-6 btn" onClick={handleClick}>7</button>
        <button name="8" className="item-7 btn" onClick={handleClick}>8</button>
        <button name="9" className="item-8 btn" onClick={handleClick}>9</button>
        <button name="*" className="item-9 btn btn-action" onClick={handleClick}>*</button>
        <button name="4" className="item-10 btn" onClick={handleClick}>4</button>
        <button name="5" className="item-11 btn" onClick={handleClick}>5</button>
        <button name="6" className="item-12 btn" onClick={handleClick}>6</button>
        <button name="-" className="item-13 btn btn-action" onClick={handleClick}>-</button>
        <button name="1" className="item-14 btn" onClick={handleClick}>1</button>
        <button name="2" className="item-15 btn" onClick={handleClick}>2</button>
        <button name="3" className="item-16 btn" onClick={handleClick}>3</button>
        <button name="+" className="item-17 btn btn-action" onClick={handleClick}>+</button>
        <button name="0" className="item-18 btn" onClick={handleClick}>0</button>
        <button name="." className="item-19 btn" onClick={handleClick}>.</button>
        <button name="result" className="item-20 btn btn-action" onClick={handleResult}>=</button>
      </div>
    </div>
  );
}

export default App;
