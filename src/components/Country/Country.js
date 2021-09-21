import React from 'react';
import './country.css'

const Country = (props) => {

    const {name,capital,population,flag} =props.country ;
    return (
        <div className='country'>

            <h1>Name : {name}</h1>
            <img src={flag} alt="" />
            <h3>Capital : {capital}</h3>
            <p>Population : {population}</p>
        
        </div>
    );
};

export default Country;