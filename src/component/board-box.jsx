import React from 'react';
import "./../css/box.css"

const Box = (props) =>{
    return(
        <button className="BoardBox" onClick={props.onClick} >
            {props.value}
        </button>
    );
}

export default Box