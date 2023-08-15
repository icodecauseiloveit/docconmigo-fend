import './_Navbar.scss'; 

const Navbar = () => (
    <>
        <nav className={"navbar"}>
        <div className="navbar__container">
            <div className="navbar__logo">
                <a className='navbar__logo-txt' href="/#">DocConmigo</a>
            </div>
            <div className="navbar__menu">
                <div className="navbar__links">
                    <a className='navbar__link' href="/#">blog</a>
                    <a className='navbar__link' href="/#">tienda</a>
                    <a className='navbar__link' href="/#">servicios</a>
                </div>
                <div className="navbar__auth">
                    <a className='navbar__link' href="/#">registrame</a>
                    <a className='navbar__btn' href="/#">acceder</a>
                </div>
            </div>
        </div>
        </nav>
    </>
)

export default Navbar;
