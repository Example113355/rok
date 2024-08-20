import {
    NavLink, useNavigate
} from 'react-router-dom'
import React, {useState} from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className="header">
            <button className="menu-button" onClick={toggleMenu}>
                ☰
            </button>
            <div className="logo" onClick={handleLogoClick}>
                <img height={90} src="http://kamiautobot.com/wp-content/uploads/2024/07/Kamiautubot-logo-ngang.png" alt="logo" />
            </div>
            <div className='header-link'>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Trang chủ</NavLink>
                <NavLink to="/rok" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Rise Of Kingdom Bot</NavLink>
                <NavLink to="/cod" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Call Of Dragon Bot</NavLink>
                <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Giỏ hàng</NavLink>
                <a href="https://wbs.minarok.com/" className={`nav-link`}>Đăng nhập Bot</a>
            </div>
            <div className={`header-link modal-header-link ${menuOpen? 'open' : ''}`}>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Trang chủ</NavLink>
                <NavLink to="/rok" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Rise Of Kingdom Bot</NavLink>
                <NavLink to="/cod" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Call Of Dragon Bot</NavLink>
                <NavLink to="/cart" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Giỏ hàng</NavLink>
                <a href="https://wbs.minarok.com/" className={`nav-link`}>Đăng nhập Bot</a>
            </div>
        </div>
    );
};

export default Header;
