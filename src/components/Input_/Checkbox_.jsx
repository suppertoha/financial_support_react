import React, { useState } from "react";

function Checkbox(props) {
  const [checked, setChecked] = useState(true);

  let msg;
  if (checked) {
    msg = <span className="active-form" ></span>;
  } else {
    msg = <span className="active-form1" ></span>;
  }

  return (
    <div className="check">
      <input
        type="checkbox"
        {...props}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span>{msg}</span>
    </div>
  );
}

export default Checkbox;
