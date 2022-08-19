import "./Myinput_.scss";
import React from 'react';

const Myinput_ = ({value, setValue, placeholder }) => {

  return (
    <>
      <input type="text" placeholder={placeholder} value={value} onChange={event => setValue(event.target.value)} />
    </>
  );
};

export default Myinput_;