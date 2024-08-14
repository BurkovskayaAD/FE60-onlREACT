import './DropDown.css';

function DropDown() {
    return ( <>
        <div className='dropdown'>
            <div className='dropdown-item'>Home</div>
            <div className='dropdown-item'>
                <div className='dropdown-item-icon'>
                    <i className="fa-regular fa-sun dropdown-icon"></i>
                </div>
                <div className='dropdown-item-icon'>
                    <i className="fa-regular fa-moon dropdown-icon"></i>
                </div>
            </div>
        </div>
    </> );
}

export default DropDown;