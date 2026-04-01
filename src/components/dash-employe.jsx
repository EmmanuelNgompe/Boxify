import Menu from "./menu.jsx";
import '../style/dash-employe.css';
import Header from "./header.jsx";
import ListEmployes from "./list-E.jsx";
import ListNotification from "./list-N.jsx";
import { useState } from "react";
import EProfil from "./E-Profil.jsx";



function DashEmploye() {
   const [visible, setVisible] = useState(false);

    const inverser = (nomBouton) => {
        // setVisible(!visible);
        setVisible(prev => prev === nomBouton ? null : nomBouton);

    };

    return (
        <div className="dash-employe">
            {visible === "profil" && <EProfil onToggle={inverser}/>}
            <Menu onToggle={inverser} coul4='#fef4ed'/>
            <div className="right-content">
                <Header />
                <ListEmployes />
                 {visible === "notifications" && <ListNotification />}
            </div>
        </div>
    );
}

export default DashEmploye;