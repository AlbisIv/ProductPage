/* eslint-disable camelcase */
import React, { useState } from 'react';
import { useStore } from 'zustand';
import styles from './OptionAdder.module.scss';

const OptionAdder = () => {
//   const state = useStore((state:State) => state);
  const [inputValue, setInputValue] = useState(0);
  const a = 5;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!value) {
      setInputValue(0);
    }
    if ((value > 0)) {
      setInputValue(value);
    }
  };
  return (
    <div className={styles.input__container}>
      <button
        disabled={inputValue === 0}
        className={(inputValue === 0) ? styles.btn__disabled : styles.btn}
        onClick={() => setInputValue(inputValue - 1)}
      >
        -
      </button>
      <input
        className={styles.input}
        value={inputValue}
        onChange={(e) => { handleInput(e); }}
        type="number"
      />
      <button
        className={styles.btn}
        onClick={() => setInputValue(inputValue + 1)}

      >
        +
      </button>
    </div>
  );
};
export default OptionAdder;
