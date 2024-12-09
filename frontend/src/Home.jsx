import Contacte from "../componente/Contacte";
import Footer from "../componente/Footer";
import NavBar from "../componente/NavBar";
import Meniu from "../componente/Meniu";
import "./Home.css"

function Home() {
  return (
    <>
    <div>
      <NavBar/>
    </div>
    <div className="homepage">
      <div className="top">
        <div className="logo">
        <img src="ChefIT.svg"></img>
        </div>
      </div>

    </div>
    </>
  )
}