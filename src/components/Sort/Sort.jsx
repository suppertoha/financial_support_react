import React, { useState } from 'react';
import './Sort.scss';

export default function Sort({ className, variant, title,any}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const list = ['1 год', '2 года', '3 года'];
  const text = ['Любой', '1 год', '2 года', '3 года'];
  let sortName = list[selected];
  let sortText = text[selected];

  const onClickListItem = (i) => {
    setSelected(i);
    setOpen(false);
  };
  return (
    <>
      <div className="sort__title">{title}</div>
      <div className={`sort ${className ? className : ''} ${variant ? `sort__${variant}` : ''} `}>
        <div className="sort__label">
          <div onClick={() => setOpen(!open)} className={`sort__header  ${open ? 'active' : ''}`}>
            <div className="sort__name">{any ? sortText: sortName }</div>
            <div className="sort__images">
              <img src="../images/arrow_bottom.svg" alt="" />
            </div>
          </div>
        </div>
        {
          <div className={`sort__popup ${open ? 'active' : '' }`}>
            <ul className="sort__items">
              {list.map((name, i) => (
                <li
                  key={i}
                  onClick={() => onClickListItem(i)}
                  className={selected === i ? 'active' : ''}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    </>
  );
}
