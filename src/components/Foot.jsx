import React from 'react';
import "../style/Footer.css";

const Foot = () => {
    return (
        <div>
            <footer className="main_footer">
                <div className="historique">
                    <p>Historique des modifications du nom</p>
                </div>
                <div className="soustitre">
                    <p>Chaque changement apporté au nom a été consigné afin d'assurer la validité de cette certification.</p>
                    <br />
                    <p>BARRO KAKOLO </p>
                </div>
            </footer >
        </div>
    );
};

export default Foot;
