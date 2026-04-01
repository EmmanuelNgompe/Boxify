import '../style/menu.css';
import Boxify from '../images/Boxify.png';
import Portrait from '../images/Portrait.jpg';
import Home from '../images/Home.png';
import colis from '../images/colis.png';
import Courriel from '../images/Courriel.png'; 
import employé from '../images/employé.png';
import Notif from '../images/Notif.png';
import Histry from '../images/Histry.png';
import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';


function Menu({onToggle, coul1, coul2, coul3, coul4, coul5, coul6 }) {
    
    const navigate = useNavigate();

    const handlenavigate = (path) => (event) => {
        event.preventDefault();
        // Handle login logic here
        navigate(path);
    };

    return (
        <div className="menu">
            {/* definition du logo de l'application sur la barre de menu */}
            <img src={Boxify} alt="Boxify Logo" className='logo2'/>
            {/* cette div "item" gere les onglet du menu. on a:
            -la fonction handlennavigate qui permet la navigation vers les repertoire specifies
            - */}
            <div className="item">
                <button onClick={handlenavigate('/Dashboard')} className='menu-button'> <div className="menu-item" style={{backgroundColor:coul1}}><img src={Home} alt="icone" className='icone'/>    Acceuil</div></button>
                <button onClick={handlenavigate('/colis')} className='menu-button'> <div className="menu-item" style={{backgroundColor:coul2}}><img src={colis} alt="icone" className='icone'/>    Colis</div></button>
                {/* <button onClick={handlenavigate('/courriel')} className='menu-button'> <div className="menu-item" ><img src={Courriel} alt="icone" className='icone' style={{backgroundColor:coul3}}/>    Courriel</div></button> */}
                <button onClick={handlenavigate('/employe')} className='menu-button'> <div className="menu-item" style={{backgroundColor:coul4}}><img src={employé} alt="icone" className='icone'/>    Employés</div></button>
                <button onClick={() => onToggle("notifications")} className='menu-button'> <div className="menu-item" style={{backgroundColor:coul5}}><img src={Notif} alt="icone" className='icone'/>    Notification</div></button>
                {/* {visible && <ListNotification />} */}
                <button onClick={handlenavigate('/historique')} className='menu-button'> <div className="menu-item" style={{backgroundColor:coul6}}><img src={Histry} alt="icone" className='icone'/>    Historique</div></button>
            </div>

            <div className="barre-profil">
                <div onClick={() => onToggle("profil")} className="profil-info">
                    <img src={Portrait} alt="icone" className='portrait' />
                    <span>  Emmanuel</span>
                </div>
            
            </div>
        </div>
    );
}
    
export default Menu;