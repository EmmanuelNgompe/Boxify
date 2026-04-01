
import '../style/list-N.css';
import bo from '../images/bo.png';
// import { useState } from 'react';

function ListNotification() {


    return(
        <div className="tab-notifications">
            <h1 style={{ paddingLeft: "10px" }}>Notifications</h1>
            <div className="bloc-de-notif">
                <h2 style={{ paddingLeft: "10px" }}>Periode</h2> 
                <div className="la-notif">
                    <div>
                        <img src={bo} alt="loupe" className="bo" />
                    </div>
                    <div className="text-notif">
                        <span className="generateur">Nom</span>
                        <span className="message">Message.</span>
                    </div>
                </div>
                <div className="la-notif">
                    <div>
                        <img src={bo} alt="loupe" className="bo" />
                    </div>
                    <div className="text-notif">
                        <span className="generateur">Nom</span>
                        <span className="message">Message.</span>
                    </div>
                </div>
            </div>
            <div className="bloc-de-notif">
                <h2 style={{ paddingLeft: "10px" }}>Periode</h2> 
                <div className="la-notif">
                    <div>
                        <img src={bo} alt="loupe" className="bo" />
                    </div>
                    <div className="text-notif">
                        <span className="generateur">Nom</span>
                        <span className="message">Message.</span>
                    </div>
                </div>
                <div className="la-notif">
                    <div>
                        <img src={bo} alt="loupe" className="bo" />
                    </div>
                    <div className="text-notif">
                        <span className="generateur">Nom</span>
                        <span className="message">Message.</span>                        </div>
                    </div>
                </div>
            </div>
        
    );
}

export default ListNotification;