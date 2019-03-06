import React from 'react';

const validation = (props) => {
    return (
        <div>
            {
                props.inputLength > 5 ?
                <p>text length is fine</p> :
                <p>text is too short</p>
            }
        </div>
    );
};

export default validation;