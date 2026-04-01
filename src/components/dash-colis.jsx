import '../style/dash-colis.css'
import Menu from './menu.jsx';
import Header from './header.jsx';
import Statut2 from './statut2.jsx';
import StatColis from './stat-colis.jsx';
import ListNotification from './list-N.jsx';
import EProfil from './E-Profil.jsx';
import { useState } from 'react';

function DashColis() {

    const [visible, setVisible] = useState(false);

    const inverser = (nomBouton) => {
        // setVisible(!visible);
        setVisible(prev => prev === nomBouton ? null : nomBouton);

    };

    return (
        <div className="dash-colis">
            {visible === "profil" && <EProfil onToggle={inverser}/>}
            <Menu onToggle={inverser} coul2='#fef4ed'/>
            <div className="right-content">
                <Header />
                <StatColis />
                <Statut2 />
                 {visible === "notifications" && <ListNotification />}
            </div>
        </div>
    );
}

export default DashColis;