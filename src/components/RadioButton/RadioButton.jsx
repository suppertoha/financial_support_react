import React from 'react';

export default function RadioButton({typesArray, value, setValue }) {
  return (
    <ul>
      {typesArray.map((el) => (
        <li key={el.value}
          onClick={() => setValue(el.value)}
          className={value === el.value ? 'active' : ''}>
          {el.title}
        </li>
      ))}
    </ul>
  );
}
