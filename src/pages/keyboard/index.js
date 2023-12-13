import { RiDeleteBack2Line } from "react-icons/ri";
import React, { useState } from 'react';
import './keyboard.css';
import {cpfMask} from '../../mascaras/cpf'


const NumericKeypad = () => {
  const [input, setInput] = useState('');


  const handleButtonClick = (value) => {
    setInput((prevInput) => cpfMask(prevInput + value));
  };

  const handleClearButtonClick = () => {
    setInput('');
  };

  const handleBackspaceButtonClick = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const renderButtons = () => {
    const buttons = [];
    for (let i = 1; i <= 9; i++) {
      buttons.push(
        <button key={i} onClick={() => handleButtonClick(i.toString())}>
          {i}
        </button>
      );
    }

    buttons.push(
        <button key="backspace" onClick={handleBackspaceButtonClick}>
          <RiDeleteBack2Line />
        </button>
      );

    buttons.push(
      <button key="0" onClick={() => handleButtonClick('0')}>
        0
      </button>
    );



    buttons.push(
      <button onClick={() => window.location.assign('/dados')}>
        ok
      </button>
    );

    return buttons;
  };

  return (
    <div>
        <div className="divCpf">
            <p>Qual seu CPF? </p>
        </div>
        <input type="text" value={input} readOnly />
        <div className="numeric-keypad">{renderButtons()}</div>
    </div>
);
};

export default NumericKeypad;