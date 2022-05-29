import React from 'react';

function Spinner() {
    return (
        <div className="spinner__container">
            <div className="spinner">
                <div className="spinner__text">Loading...</div>
                <div className="spinner__sector spinner__sector--first"></div>
                <div className="spinner__sector spinner__sector--second"></div>
                <div className="spinner__sector spinner__sector--third"></div>
            </div>
        </div>
    );
}

export default Spinner;