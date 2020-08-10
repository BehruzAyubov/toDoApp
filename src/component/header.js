import React, { Component }  from 'react';

const Header  = (props) => {
    return (
        <div className="header-container">
            <h1 className="header-text">You have <span style={{color:"red"}}>{props.numTask}</span> tasks to complete.</h1>
        </div>
    )
}

export default Header;