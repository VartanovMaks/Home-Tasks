import React from 'react';

const ModelCard = (props)=> {
    return (
        <div className="Model-Card">
            <h3> {props.producer} {props.model}</h3>
            <p> {props.tankVolume} {props.horsePower}</p>

        </div>
    );
}

export function DisplayModels(props) {
    let models = props;
    return (
        <div className='model-cards'>
        {models.map(item =>
            <ModelCard model={item.model} producer={item.producer}
                       tankVolume={item.tankVolume} horsePower={item.horsePower} />
        ) }
            
        </div>
    );
}

//export default DisplayModels;
