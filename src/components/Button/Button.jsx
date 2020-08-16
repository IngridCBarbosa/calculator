import React from 'react';

import './styles.css';

function Button(props) {
    return (
        <button
            className={
                `
                button 
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double':''}
                ${props.triple ? 'triple':''} 
                
                `
            }
            onClick={e => props.click && props.click(props.label)}
        >
            {props.label}
        </button>
    );
}

export default Button;