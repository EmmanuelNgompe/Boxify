import Menu from "./menu.jsx";
import Header from "./header.jsx";
import '../style/dash.css';
import './button.jsx'
import Button from "./button.jsx";
import Statut from "./statut-colis.jsx";
import ListNotification from "./list-N.jsx";
import { useState } from "react";
import EProfil from "./E-Profil.jsx";




function Dashboard() {
    const [visible, setVisible] = useState(false);

    const inverser = (nomBouton) => {
        // setVisible(!visible);
        setVisible(prev => prev === nomBouton ? null : nomBouton);

    };

    return (
        <div className="dashboard">
                {visible === "profil" && <EProfil onToggle={inverser}/>}
                {/*
                -coul1 est un parametre de la fonction Menu qui permet de colorier 
                 l'arriere plan de l'onglet de navigation qui nous incombe.
                - onToggle est egalemt un parametre de la fonction Menu auquel 
                 auquel on affecte a chaque fois une fonction qui doit s'executer dans */}
                <Menu onToggle={inverser} coul1='#fef4ed'/>
                <div className="right-content">
                    <Header />
                    <Button /> 
                    <Statut />
                    {visible === "notifications" && <ListNotification />}
                </div>
        </div>
    );

}

export default Dashboard;
// This component renders the dashboard with a menu and a title.