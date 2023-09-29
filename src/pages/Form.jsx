import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import "../style/Form.css";



const Form = () => {
    //State (Etat, Donnée)

    const [user, setuser] = useState([
        { cle: 1, id: "GXF4AYJRY", nom: "BARRO", postnom: "KAKOLO" },
        { cle: 2, id: "GXghytJRY", nom: "George", postnom: "bossoke" },

    ]);

    const [inputValue, setInputValue] = useState("");
    const [redirect, setRedirect] = useState(false);



    //Comportements
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const foundUser = user.find(u => u.id.toUpperCase() === inputValue.toUpperCase());
        if (foundUser) {
            setRedirect(true);

        } else {
            alert("Mot de passe incorrecte !")
        }
    };//${foundUser.id} 
    if (redirect) {
        const foundUser = user.find(u => u.id.toUpperCase() === inputValue.toUpperCase());
        return <Navigate to={`/Mainform/${foundUser.nom},${user}`} />;
    }



    //Render (Affichage)
    return (
        <div>

            <div className="main">
                <h1>Valider un Certificat</h1>
                <div className="blocForm">
                    <form action="submit" onSubmit={handleSubmit}>
                        <label className="cust"><input value={inputValue} required type="text" onChange={handleChange} className='champ' />
                            <span className="placeholder">Saisissez l`ID du certificat</span></label>
                        <div className="sousTitre"><h5>L'ID du certificat se trouve au bas de celi_ci</h5></div>
                        <button type="submit">VALIDER</button>
                    </form>



                </div>
            </div>
        </div >
    );
};

export default Form;
