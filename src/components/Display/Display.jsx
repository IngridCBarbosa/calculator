import React from 'react';

import './styles.css';

function Display(props) {
    return (
        <div className="display">{props.value}</div>
    );

}

export default Display;