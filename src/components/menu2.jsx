import '../style/menu.css';
import bo from '../images/bo.png';
import Portrait from '../images/Portrait.jpg';
import Home from '../images/Home.png';
import colis from '../images/colis.png';
import Courriel from '../images/Courriel.png'; 
import employé from '../images/employé.png';
import Notif from '../images/Notif.png';
import Histry from '../images/Histry.png';
import { useNavigate } from 'react-router-dom';
// import React, { useState } from 'react';


function Menu2({onToggle}) {
    
    const navigate = useNavigate();

    const handlenavigate = (path) => (event) => {
        event.preventDefault();
        // Handle login logic here
        navigate(path);
    };

    return (
        <div className="menu2">
            <img src={bo} alt="Mini Logo" className='logo3'/>
            <div className="item">
                <button onClick={handlenavigate('/Dashboard')} className='menu-button'>
                    <div className="menu-item"><img src={Home} alt="icone" className='icone'/></div>
                </button>
                <button onClick={handlenavigate('/colis')} className='menu-button'>
                    <div className="menu-item"><img src={colis} alt="icone" className='icone'/></div>
                </button>
                {/* <button onClick={handlenavigate('/courriel')} className='menu-button'> */}
                    {/* <div className="menu-item"><img src={Courriel} alt="icone" className='icone'/></div> */}
                {/* </button> */}
                <button onClick={handlenavigate('/employe')} className='menu-button'>
                    <div className="menu-item"><img src={employé} alt="icone" className='icone'/></div>
                </button>
                <button onClick={() => onToggle("notifications")} className='menu-button'>
                        <div className="menu-item"><img src={Notif} alt="icone" className='icone'/></div>
                </button>
                <button onClick={handlenavigate('/historique')} className='menu-button'>
                    <div className="menu-item"><img src={Histry} alt="icone" className='icone'/></div>
                </button>
            </div>

            <div className="barre-profil">
                <div onClick={() => onToggle("profil")} className="profil-info">
                    <img src={Portrait} alt="icone" className='portrait' />
                </div>
            
            </div>
        </div>
    );
}
    
export default Menu2;