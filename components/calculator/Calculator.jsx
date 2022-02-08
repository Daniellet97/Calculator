import {useState} from 'react';
import './Calculator.css';
import { calculatorFun } from '../calculation/Calculation';


export const Calculator = () => {
  const array = [1, 2, 3, '+' , 4, 5, 6, '*' , 7, 8, 9, '/', '-', 0, '.', '=', 'C'];

  const [result, setResults] = useState([]);

  const calculateBtn = (button) => {
    if (button === 'C'){
      setResults([]);
      return
    }

    if (button === '='){
      let res = calculatorFun(result)
      setResults(res)
      return
    }

        setResults([...result, button]);
}

  return <div className="calculator">
      <h1>Calculator</h1>
      <div className="dispalyed">
      {result}
      </div>

      <div className="calculator_keys"> 
      {array.map((item, index) =>( 
        <button onClick={() => calculateBtn(item)} key={index}>{item}</button>))}
      </div>
  </div>
};
