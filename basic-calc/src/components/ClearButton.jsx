import React from 'react';
import './ClearButton.css';

export const ClearButton = props =>(
    <div className="clear-btn" onClick={props.handleClearBtn}>
        {props.children}
    </div>
)