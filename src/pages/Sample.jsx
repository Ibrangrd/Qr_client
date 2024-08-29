import React from 'react';
const Sample = (props) =>{
    return (
        <div className="item" style={{ "--position": props.po }}>
            <img
                src={props.image} alt="Wedding photo" />
        </div>
    );
}
export default Sample;