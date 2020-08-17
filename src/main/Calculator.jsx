import React, { useState} from 'react';

import './Styles.css';


import Button from '../components/Button/Button';
import Display from '../components/Display/Display';

function Calculator() {

    const [displayValue, setDisplayValue] = useState('0');
    const [values, setValue] = useState([0, 0]);
    const [operations, setOperations] = useState({});
    const [current, setCurrent] = useState(0);

    function clearMemory() {
        setDisplayValue('0');
    }

    function setOperation(operation) {
        //console.log(operation);
    }

    function addDigit(digit) {

        if (digit === '.' && displayValue.includes('.')) {
            return;
        }
        const clearDisplay = displayValue === '0';
        const currentValue = clearDisplay ? '' : displayValue;

        setDisplayValue(currentValue + digit);

        if(digit !== '.'){
            
            const value = [...values];
            value[current] =  parseInt(displayValue);
            setValue(value);
            console.log(value);
        }

    }

    return (

        <div className="calculator">
            <Display value={displayValue} />
            <Button label="AC" click={clearMemory} triple />
            <Button label="/" click={setOperation} operation />
            <Button label="7" click={addDigit} />
            <Button label="8" click={addDigit} />
            <Button label="9" click={addDigit} />
            <Button label="*" click={setOperation} operation />
            <Button label="4" click={addDigit} />
            <Button label="5" click={addDigit} />
            <Button label="6" click={addDigit} />
            <Button label="-" click={setOperation} operation />
            <Button label="1" click={addDigit} />
            <Button label="2" click={addDigit} />
            <Button label="3" click={addDigit} />
            <Button label="+" click={setOperation} operation />
            <Button label="0" click={addDigit} double />
            <Button label="." click={addDigit} />
            <Button label="=" click={setOperation} operation />
        </div>

    );
}

export default Calculator;