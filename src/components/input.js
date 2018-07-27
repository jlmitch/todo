import React from 'react';

import Button from './button.js';

function DoInput(props) {
    return (
        <div>
            <input className="do-input" placeholder={props.placeholder} ></input>
            <Button onClick="addDo" btnType="Add" />
        </div>
    )    
}

export default DoInput;