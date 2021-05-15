import React from 'react';
import './Button.css';


const isNotOperator = val => {
    return !isNaN(val) || val === '.' || val === '='
}

const Button = props => (
    <div className={`button-wrapper ${isNotOperator(props.children) ? null : 'operator'}`} onClick={()=>props.handleClick(props.children)}>
        {props.children}
    </div>
)

export default Button;