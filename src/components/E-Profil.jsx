// import { useState } from 'react';
import '../style/E-Profil.css'

function EProfil({onToggle}) {



  return (
    <div className="rectangle">
        <div className="updateProfil"> 
            <div className="element-profil">
                <h1 className="header-profil">Profil</h1>
            </div>
            <div className="element-profil">
                <p>Nom</p>
                <input type="text" placeholder="Entrez votre nom" className='input-profil'/>
            </div>
            <div className="element-profil">
                <p>Prénom</p>
                <input type="text" placeholder="Entrez votre prénom" className='input-profil'/>
            </div>
            <div className="element-profil">
                <p>Email</p>
                <input type="email" placeholder="Entrez votre email" className='input-profil'/>
            </div>
            <div className="element-profil">
                <p>Phone Number</p>
                <input type="text" placeholder="Entrez votre numéro de téléphone" className='input-profil'/>
            </div>
            <div className="element-profil">
                <p>Matricule</p>
                <input type="text" placeholder="Entrez votre matricule" className='input-profil'/>
            </div>
            <div className="div-button">
                <button type="reset" onClick={() => onToggle()} className='btn-annuler'>Annuler</button>
                <button type="submit" className='btn-sauvegarder'>Sauvegarder</button>
            </div>
        </div>
    </div>
  );
}

export default EProfil;
