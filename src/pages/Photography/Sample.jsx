import React from 'react';
const Sample = (props) =>{
    return (
        <div className="item" style={{ "--position": props.po }}>
            <img
                src={props.image} alt="Wedding photo" 
                loading="lazy" 
                />
        </div>
    );
}
export default Sample;