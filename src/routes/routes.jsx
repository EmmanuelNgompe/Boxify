
import Dashboard from '../components/dashboard.jsx';
import Login from '../components/login.jsx';
import DashColis from '../components/dash-colis.jsx';
// import DashCourriel from '../components/dash-courriel.jsx';
import DashEmploye from '../components/dash-employe.jsx';
import DashHistorique from '../components/dash-historique.jsx';
// import DashNotification from '../components/dash-notification.jsx';

import '../style/route.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Mesroutes = () => {
  return (
    <div className="route">
      
      <BrowserRouter>
      <Routes>,
        {/* pour le repertoire "chemin du repertoire" envoie l'element "specifivation de l'element"
        la balise route permet la navigation et ses attribut sont "path" pour le repertoire et "element" pour le composant qu'il dit renvoyer */}
        
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/colis" element={<DashColis />} />
        {/* <Route path="/courriel" element={<DashCourriel />} /> */}
        <Route path="/employe" element={<DashEmploye />} />
        <Route path="/historique" element={<DashHistorique />} />
        {/* <Route path="/notification" element={<DashNotification />} /> */}
        {/* Ici, nous avons notre premiere page de connexion incontournable */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default Mesroutes;