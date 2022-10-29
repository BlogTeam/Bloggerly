import './Navbar.css' ;

const Navbar= () => {
    return (
        <nav className="navbar">
            <ul className='navbarList'>
                <div className='navbarList__leftItem'>
                <li className="navbar__Items"><i class="fa-solid fa-blog"></i>&nbsp;&nbsp;BLOGGER</li>
                <li className="navbar__Items">Home</li>
                <li className="navbar__Items">About</li>
                </div>
                <div className='navbarList__rightItem'>
                <li className="navbar__Items">Write</li>
                <li className="navbar__Items">Log Out</li>
                <img src='https://cdn-icons-png.flaticon.com/512/2202/2202112.png' className='topImg'/>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;