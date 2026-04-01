import Menu from "./menu.jsx";
import '../style/dash-historique.css';
import Header from "./header.jsx";
import ListNotification from "./list-N.jsx";
import { useState } from "react";
import EProfil from "./E-Profil.jsx";

function DashHistorique() {
    const [visible, setVisible] = useState(false);

    const inverser = (nomBouton) => {
        // setVisible(!visible);
        setVisible(prev => prev === nomBouton ? null : nomBouton);

    };

    return (
        <div className="dash-historique">
            {visible === "profil" && <EProfil onToggle={inverser}/>}
            <Menu onToggle={inverser} coul6='#fef4ed'/>
            <div className="right-content">
                <Header />
                 {visible === "notifications" && <ListNotification />}
            </div>
        </div>
    );
}

export default DashHistorique;