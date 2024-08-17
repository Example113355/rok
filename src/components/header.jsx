import {
    NavLink, useNavigate
} from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    }

    return (
        <div className="header">
            <div className="logo" onClick={handleLogoClick}>
                <img height={90} src="http://kamiautobot.com/wp-content/uploads/2024/07/Kamiautubot-logo-ngang.png" alt="logo" />
            </div>
            <div>
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Trang chủ</NavLink>
                <NavLink to="/rok" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Rise Of Kingdom Bot</NavLink>
                <NavLink to="/cod" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Call Of Dragon Bot</NavLink>
                <NavLink to="/privacy" className={({ isActive }) => `nav-link ${isActive ? 'active-link' : ''}`}>Chính sách bảo mật và đền bù</NavLink>
            </div>
        </div>
    );
};

export default Header;
