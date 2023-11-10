
import { useState } from 'react';
import * as math from 'mathjs';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";

function App() {

const buttonColor = "#f2a33c";
const anotherColor = "#a5a5a5";
const [text, setText] = useState("");
const [result, setResult] = useState("");

const addToText = (val) => {
  setText((text) => [...text, val])
};

const resetInput = () => {
  setText("");
  setResult("");
}

const calculateResult = () => {
  const input = text.join("");

  setResult(math.evaluate(input));
}

  return (
    <div className="App">
      <div className="calc-wrapper">

      <Input text={text} result={result}/>
        <div className="row">
          <Button symbol={"AC"} color={anotherColor} handleClick={resetInput}/>
        </div>
        <div className="row">
       <Button symbol={"7"} handleClick={addToText}/>
       <Button symbol={"8"} handleClick={addToText}/>
       <Button symbol={"9"} handleClick={addToText}/>
       <Button symbol={"/"} color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
       <Button symbol={"4"} handleClick={addToText}/>
       <Button symbol={"5"} handleClick={addToText}/>
       <Button symbol={"6"} handleClick={addToText}/>
       <Button symbol={"*"} color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
       <Button symbol={"1"} handleClick={addToText}/>
       <Button symbol={"2"} handleClick={addToText}/>
       <Button symbol={"3"} handleClick={addToText}/>
       <Button symbol={"+"} color={buttonColor} handleClick={addToText}/>
        </div>
        <div className="row">
       <Button id={"zero"}symbol={"0"} handleClick={addToText}/>
       <Button id={"minus"}symbol={"-"} handleClick={addToText}/>
       <Button id={"equals"}symbol={"="} color={buttonColor} handleClick={calculateResult}/>
        </div>
      </div>
    </div>
  );
}

export default App;
