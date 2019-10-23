import React from 'react';

const square = (props) => {
    return (
    <button className="square" onClick={props.clicked}>
        {props.value}
    </button>
    );
}

export default square;
