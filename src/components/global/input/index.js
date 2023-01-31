import React from 'react';
import './styles.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className='form-group mb-2'>
      {props.label && <label className='control-label mb-1 fs-4' htmlFor={`${props.htmlFor}`}>{props.label} {props.errors && <span className='text-danger'>*</span>}</label>}
      <div className='input-group input-group-lg flex-nowrap mb-2'>
        {props.icon && <span className='input-group-text'><i className={`glyphicon glyphicon-${props.icon}`}></i></span>}
        <input
          {...props}
          ref={ref}
          className={`form-control fs-4 ${props.errors && 'is-invalid'}`}
        />
      </div>
      {(props.errors) && <p className={`fs-6 text-danger`}>{props.errors}</p>}
    </div>
  )
});

export default Input;