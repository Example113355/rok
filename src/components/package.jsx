import React from 'react';
import { useNavigate } from 'react-router-dom';

const Package = ({ id, name, price, thumbnail_img, is_reduce, reduced_price, type }) => {
    const navigate = useNavigate();

    const handleBuy = () => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        let newItem = {
            id: id,
            name: name,
            price: price,
            quantity: 1,
        };

        const itemIndex = cart.findIndex((item) => item.id === id);

        if (itemIndex === -1) {
            cart.push(newItem);
        } else {
            cart[itemIndex].quantity++;
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        navigate('/cart');
    }

    const handleClick = () => {
        if (type === 'rok') {
            navigate(`/rok/${id}`);
        }
        else {
            navigate(`/cod/${id}`)
        }
    };

    return (
        <div className="package-item">
            <div className="package-item-top" onClick={handleClick}>
                <div className="package-img">
                    <img src={thumbnail_img} alt={name} />
                </div>
                <div className="package-info">
                    <h3>{name}</h3>
                    {
                        is_reduce ? (
                            <div className="package-price reduced">
                                <span className="original-price">{price}</span>
                                <span className="reduced-price">{reduced_price}</span>
                            </div>
                        ) : (
                            <div className="package-price">
                                <span className="reduced-price">{price}</span>
                            </div>
                        )
                    }
                </div>
            </div>

            <button className='package-button' onClick={handleBuy}>Add to cart</button>
        </div>
    );
};

export default Package;
