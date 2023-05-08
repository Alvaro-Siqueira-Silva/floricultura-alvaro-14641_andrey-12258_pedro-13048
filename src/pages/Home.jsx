import banner from "../assets/pexels-david-j-boozer-105075 (2).jpg"
import produto from "../assets/pexels-pixabay-40744.jpg"
import Navbar from "./Navbar"
import Footer from "./Footer"
import '../Reset.css'
import '../App.css'
function Home(){
    return(
        <>
            <Navbar/>
            <img src={banner} className="banner"/>
            <div className="center">
            </div>
            <div className="HomeProdutos">
                <h1>Refresque a mente</h1>
                <h1>Álvaro - Andrey - Pedro</h1> <br />
                <div className="row-center">
                    <img src={produto}/>
                    <img src={produto}/>
                    <img src={produto}/>
                    <img src={produto}/>
                </div>
            </div>
        <Footer/>
    </>
  )
}
export default Home