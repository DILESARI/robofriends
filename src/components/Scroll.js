import React from 'react';

const Scroll = (props) => {
    // console.log(props);
    return (
        <div style = {{overflow: 'scroll', border: '0px solid black', height: '500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;