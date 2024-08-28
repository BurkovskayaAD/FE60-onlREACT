import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return ( 
        <>
        <header>
            <Link to="/">MAIN</Link>
            <Link to="/aboutus">ABOUT US</Link>
            <Link to="/posts">ALL POSTS</Link>
{/* 
            <a href="#">MAIN</a>
            <a href="#">ABOUT US</a>
            <a href="#">ALL POSTS</a> */}
        </header>
        </>
     );
}

export default Header;