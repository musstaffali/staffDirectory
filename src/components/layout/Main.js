import React from 'react';

function Header() {
    return (
        <header style={mainStyle}>
            <h1>Staff Directory</h1>
            <p style={ titleStyle }>Search for an Staff by First or Last name below</p>
        </header>   
    )}
const mainStyle ={
    background: '#101D42',
    color: '#ffffff',
    textAlign: 'left',
    padding: '5px',
    width: '100%'
}
const titleStyle = {
    color: '#fff',
    textAlign: 'center',
    padding: '5px'
}
export default Header;
