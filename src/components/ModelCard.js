import React from 'react';

export const ModelCard = (props)=> {
    return (
        <div className="Model-Card">
            <h3> {props.producer} {props.model}</h3>
            <p> {props.tankVolume} {props.horsePower}</p>

        </div>
    );
}