import Logo from "../../assets/img/logo.svg"
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={Logo} alt="logo-dsmeta" />
                        <h1>DSMeta</h1>
                        <p>
                            Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
                        </p>
                        <h3>
                            Replicado por Gabriel Aguirre
                        </h3>
                </div>
            </header>
        </>
    )
}

export default Header