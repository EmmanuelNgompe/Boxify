import '../style/list-E.css';
import loupe from '../images/loupe.png';
import employé2 from "../images/employé2.png";
import courriel2 from "../images/courriel2.png";
import trash from "../images/trash.jpg";

function ListEmployes() {

    return (

     <div className="tab-employes">
                <div className="box1">
                    <div className="titre">
                        <p className="titre1">List des employés</p>
                        <p className="titre2">tous les infos sur les employés</p>
                    </div>
                    <div className="filtres">
                        <div className="search-container">
                            <input type="search" id="search" placeholder='Rechercher' />
                            <img src={loupe} alt="Rechercher" className='loupe' />
                        </div>
                        <select id="select" aria-label='trier par'>
                            <option value="par_statut">Par statut</option>
                            <option value="par_date">Date</option>
                        </select>
                    </div>
                </div>
                <div className="tab-info">
                    <div className="entete">Nom</div>
                    <div className="entete">Matricule</div>
                    <div className="entete">Phone Number</div>
                    <div className="entete">Email</div>
                    {/* <div className="entete">Description</div> */}
                    <div className="entete">...</div>
    
                     {/* Ligne 1 */}
                    <div className="info">John Doe</div>
                    <div className="info">Matrix A</div>
                    <div className="info">123-456-7890</div>
                    <div className="info">johndoe@example.com</div>
                    {/* <div className="info">Description</div> */}
                    <div className="info">
                        <div id='option'><img src={courriel2} alt="" className='icone3' /></div>
                        <div id='option'><img src={trash} alt="" className='icone3'   /></div>
                    </div>

                    {/* Ligne 2 */}
                    <div className="info">Jane Smith</div>
                    <div className="info">Matrix B</div>
                    <div className="info">987-654-3210</div>
                    <div className="info">janesmith@example.com</div>
                    {/* <div className="info">Description</div> */}
                    <div className="info">
                        <div id='option'><img src={courriel2} alt="" className='icone3' /></div>
                        <div id='option'><img src={trash} alt="" className='icone3'   /></div>
                    </div>

                     {/* Ligne 3 */}
                    <div className="info">Alice Johnson</div>
                    <div className="info">Matrix C</div>
                    <div className="info">555-123-4567</div>
                    <div className="info">alicejohnson@example.com</div>
                    {/* <div className="info">Description</div> */}
                    <div className="info">
                        <div id='option'><img src={courriel2} alt="" className='icone3' /></div>
                        <div id='option'><img src={trash} alt="" className='icone3'   /></div>
                    </div>

                    {/* Ligne 4 */}
                    <div className="info">John Doe</div>
                    <div className="info">Matrix A</div>
                    <div className="info">123-456-7890</div>
                    <div className="info">johndoe@example.com</div>
                    {/* <div className="info">Description</div> */}
                    <div className="info">
                        <div id='option'><img src={courriel2} alt="" className='icone3' /></div>
                        <div id='option'><img src={trash} alt="" className='icone3'   /></div>
                    </div>

                    {/* ligne 5 */}
                    <div className="info">John Doe</div>
                    <div className="info">Matrix A</div>
                    <div className="info">123-456-7890</div>
                    <div className="info">johndoe@example.com</div>
                    {/* <div className="info">Description</div> */}
                    <div className="info">
                        <div id='option'><img src={courriel2} alt="" className='icone3' /></div>
                        <div id='option'><img src={trash} alt="" className='icone3'   /></div>
                    </div>

                </div>
                <p className="texte">
                    Statut de tous les enregistrements
                    <button className="btn">
                         <img src={employé2} alt="Employé 2" className="icone2" />
                        <span>Enregistrer Un Employé</span>
                    </button>
                </p>
            </div>

    );
}

export default ListEmployes;