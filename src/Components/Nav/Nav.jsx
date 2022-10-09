import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import Logo from './Logo.png'
import styles from "./Nav.module.css";

export default function Nav({ onSearch }) {
    return (
        <nav className={styles.navBar}>
            <Link className={styles.navBarLink} to='/'>
                <span >
                    <img className={styles.navBarLogo} src={Logo} alt="Logo" />
                    <span> JIM+ - Weather App </span>
                </span>
            </Link>
            <SearchBar
                onSearch={onSearch}
                className="navBarSearchBar"
            />
            <Link to='/about' className={styles.navBarAbout}>
                <span>About</span>
            </Link>
            <Link to ='/form' >
                <span> Log In</span>
            </Link>
        </nav>
    );
};