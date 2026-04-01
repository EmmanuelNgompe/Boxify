import '../style/statut.css';
import loupe from '../images/loupe.png';
import colis2 from "../images/colis2.png";

function Statut2() {


    return (
        <div className="grd-box">
            <div className="box1">
                <div className="titre">
                    <p className="titre1">Statut des stocks</p>
                    <p className="titre2">Statut fraichement mis à jour</p>
                </div>
                <div className="filtres">
                    <div className="search-container">
                    <input type="search" id="search" placeholder='Rechercher' />
                        <img src={loupe} alt="Rechercher" className='loupe' />
                    </div>
                    <select id="select" aria-label='trier par'>
                        <option value="par_statut">statut</option>
                        <option value="par_date">Date</option>
                    </select>
                </div>
            </div>
            <div className="box2">
                <div className="entete">N°</div>
                <div className="entete">Destinataire</div>
                <div className="entete">Expediteur</div>
                <div className="entete">Phone Number</div>
                <div className="entete">Email</div>
                <div className="entete">Description</div>
                <div className="entete">Status</div>

                    {/* Ligne 1 */}
                    <div className="cell">01</div>
                    <div className="cell">John Doe</div>
                    <div className="cell">Patrice</div>
                    <div className="cell">123-456-7890</div>
                    <div className="cell">johndoe@example.com</div>
                    <div className="cell">Description</div>
                    <div className="cell"><div id='Status'>Stocker</div></div>

                    {/* Ligne 2 */}
                    <div className="cell">02</div>
                    <div className="cell">Jane Smith</div>
                    <div className="cell">Mbappe</div>
                    <div className="cell">987-654-3210</div>
                    <div className="cell">janesmith@example.com</div>
                    <div className="cell">Description</div>
                    <div className="cell"><div id='Status'>Stocker</div></div>

                    {/* Ligne 3 */}
                    <div className="cell">03</div>
                    <div className="cell">Alice Johnson</div>
                    <div className="cell">Constant</div>
                    <div className="cell">555-123-4567</div>
                    <div className="cell">alicejohnson@example.com</div>
                    <div className="cell">Description</div>
                    <div className="cell"><div id='Status'>Stocker</div></div>

                    {/* Ligne 4 */}
                    <div className="cell">04</div>
                    <div className="cell">John Doe</div>
                    <div className="cell">UBA Bank</div>
                    <div className="cell">123-456-7890</div>
                    <div className="cell">johndoe@example.com</div>
                    <div className="cell">Description</div>
                    <div className="cell"><div id='Status'>Stocker</div></div>

                    {/* ligne 5 */}
                    <div className="cell">05</div>
                    <div className="cell">SOLEVO</div>
                    <div className="cell">123-456-7890</div>
                    <div className="cell">johndoe@example.com</div>
                    <div className="cell">Description</div>
                    <div className="cell"><div id='Status'>Stocker</div></div>

            </div>
            <p className="texte">
                Statut de tous les enregistrements
                <button className="btn">
                    <img src={colis2} alt="Colis 2" className="icone2" />
                    <span>Enregistrer Un Colis</span>
                </button>
            </p>
        </div>
    );
}


export default Statut2;