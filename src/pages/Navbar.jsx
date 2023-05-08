import logo from "../assets/MicrosoftTeams-image.png"
import profile from "/profile.svg"

function Navbar(){
    return (
        <>
            <nav className="navbar">
                <a href="/"><img src={logo} id="rose"/></a>
                <a href="/produtos">Produtos</a>
                <a href="/login" id="profile"><img src={profile}/></a>
            </nav>
        </>
    )
}

export default Navbar