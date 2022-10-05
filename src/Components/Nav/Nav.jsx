import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import Logo from './Logo.png'
import styles from "./Nav.module.css";

export default function Nav({ onSearch }) {
    return (
        <nav className={styles.navbar}>
            <Link to='/'>
                <span className={styles.navbarSpan}>
                    <span>
                    <img className={styles.navBarLogo} src={Logo} alt="Logo" />
                    </span>
                    <span> JIM+ - Weather App </span>
                </span>

            </Link>
            <SearchBar
                onSearch={onSearch}
                className="navBarSearchBar"
            />

            <Link to='/about' className="navBarAbout">
                <span>About</span>
            </Link>

        </nav>
    );
};