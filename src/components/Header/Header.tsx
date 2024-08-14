import { useState } from 'react';
import UserName from '../UserName/UserName';
import './Header.css';
import DropDown from '../DropDown/DropDown';

function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false)

    return ( <>
    <header className='header'>
        <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className='header-left search'>            
            {isDropdownOpen ? <i className="fa-solid fa-xmark my-icon"></i> : <i className="fa-solid fa-bars my-icon"></i>}
        </div>
        <div className='header-rigth'>
            <div className='search'>
                <i className="fa-solid fa-magnifying-glass my-icon"></i>
            </div>
            <UserName fullName='Hanna Burkovskaya'></UserName>
        </div>
    </header>
    {isDropdownOpen ? <DropDown></DropDown> : null}
    </> );
}

export default Header;