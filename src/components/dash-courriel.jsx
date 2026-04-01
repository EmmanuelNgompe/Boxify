import Menu2 from "./menu2.jsx";
import '../style/dash-courriel.css';
// import Header from "./header.jsx";
import ListNotification from "./list-N.jsx";
import { useState } from "react";
import EProfil from "./E-Profil.jsx";
import FicheContact from './fiche-contact.jsx'
import Chatspace from './chatspace.jsx'
// import profil from "../images/profil.png";


function DashCourriel() {
    const [visible, setVisible] = useState(false);

    const inverser = (nomBouton) => {
        // setVisible(!visible);
        setVisible(prev => prev === nomBouton ? null : nomBouton);

    };

    return (
        <div className="dash-courriel">

            {visible === "profil" && <EProfil onToggle={inverser}/>}
            <Menu2 onToggle={inverser} coul3='#fef4ed'/>


            <div className="right-content2">

                {/* <header className="header-courriel">
                     <img src={profil} alt="Profil" className="profil2" />
                     <span>Emmanuel</span>
                </header> */}

                {visible === "notifications" && <ListNotification />}
                <div style={{display: "flex", flexDirection: "row", width: '100%', height: '100%' }}>
                    <FicheContact />
                    <Chatspace />
                </div>
            </div>

        </div>
    );
}

export default DashCourriel;