import React from 'react';

function addDo() {
    console.log("HIIIIIIIII");
}

function Button(props) {
    return <button onClick={addDo} className="button">{props.btnType}</button>
}

export default Button;