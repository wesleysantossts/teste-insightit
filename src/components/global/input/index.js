import React from 'react';
import './styles.css';

const Input = (props) => {
  return (
    <div className='form-group'>
      {props.label && <label className='control-label mb-1 fs-3'>{props.label}</label>}
      <div className='input-group input-group-lg flex-nowrap mb-2'>
        {props.icon && <span className='input-group-text'><i className={`glyphicon glyphicon-${props.icon}`}></i></span>}
        <input
          className='form-control fs-3'
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder || false}
          required={props.required || false}
          readOnly={props.readonly || false}
        />
      </div>
    </div>
  )
};

export default Input;