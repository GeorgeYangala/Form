import React from 'react';
import "../style/Mainform.css";
import "../style/Footer.css";
import Foot from '../components/Foot';

const Mainform = () => {
    return (
        <div>
            <div className="mainform">
                <div className="header">
                    <div className="logo">
                    </div>
                    <div className="certificate">
                        <p>Certification Valide <br />ID DU CERTIFICAT: GXF4AYJRY</p>
                    </div>
                    <div className="userCertif">
                        <p >BARRO KAKOLO a obtenu la certification Les principes fondamentaux du<br /> marketing numérique le 23/11/2022 </p>
                    </div>
                </div>
            </div>
            <Foot />
        </div>
    );
};

export default Mainform;