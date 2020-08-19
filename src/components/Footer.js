import React from 'react';

const Footer = (props) => {
    return (
        <div className="jumbotron container text-center bg-warning">
            <h1>{props.titulo}</h1>
            <p>
                 Utilizando datos del proyecto OpenWeater https://openweathermap.org/
            </p>
            <hr/>
            <p>

            </p>
            <button type="button" className="btn btn-primary btn-lg"> Ver mas</button>
        </div>
    );
};

export default Footer;