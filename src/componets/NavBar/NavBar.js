import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>PetXpress</h3>
            <div>
                <button>Alimentos</button>
                <button>Juguetes</button>
                <button>Accesorios</button>
                <button>Salud, Higiene y Bienestar</button>
                <button>Viajes y Transporte</button>
                <button>Entrenamiento</button>
                <button>Técnología Pet</button>
            </div>
            <CartWidget />
        </nav>
    )
}


export default NavBar