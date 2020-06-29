import React from 'react';

function ColorDisplay(props) {
    return (
        <section className="hexCode" id="hexCode">
            <h2 className="main-text">Hex Color: {props.data}</h2>
            <h3 className="hex-color">Click the matching square</h3>
        </section>
    )
}

export default ColorDisplay