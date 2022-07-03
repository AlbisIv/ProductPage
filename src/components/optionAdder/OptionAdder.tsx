/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import useStore from '../../store/OptionStore';
import styles from './OptionAdder.module.scss';

const OptionAdder = (props:any) => {
  const optionProp = props;
  const addOption = useStore((state) => state.addOptionCount);
  const [inputValue, setInputValue] = useState(0);

  const addOptionByCount = (by:number, option:string) => {
    addOption(by, option);
  };

  useEffect(() => {
    addOptionByCount(inputValue, optionProp.optionName);
  }, [inputValue]);

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
