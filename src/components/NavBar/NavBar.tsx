import Login from '../Login/Login';
import './NavBar.css'

const NavBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-navbar">
                <div className="container-fluid">
                    <Login/>
                </div>
            </nav>
        </>
    );
}

export default NavBar;