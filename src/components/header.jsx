import "../style/header.css";
import profil from "../images/profil.png";

function Header() {


    return (
        <header className="header">
            <img src={profil} alt="Profil" className="profil2" />
            <span>Emmanuel</span>
        </header>
    );
}


export default Header;