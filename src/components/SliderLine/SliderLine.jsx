import React from 'react';
import './SliderLine.scss';
import { Slider } from '@adobe/react-spectrum';

export default function SliderLine({ name, className, variant, title,minValue,maxValue,defaultValue,string }) {
  return (
    <div className={`slide ${className ? className : ''} ${variant ? `slide__${variant}` : ''} `}>
      <p className={title}></p>
      <Slider
        label={name}
        showValueLabel="boolean"
        className="slider"
        minValue={minValue}
        maxValue={maxValue}
        defaultValue={defaultValue}
        step={1}
        formatOptions={{ style: 'currency', currency: 'rub', maximumFractionDigits: 0 }}
        
      />
    </div>
  );
}
