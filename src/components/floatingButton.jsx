import ZaloIcon from '../assets/icon/zalo.svg';

const FloatingButton = () => {
    return (
        <div className="floating-button">
            <a href="https://zalo.me/0971844044">
                <img src={ZaloIcon} alt="" />
            </a>
        </div>
    );
};

export default FloatingButton;
