import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import rok_packages from '../utils/data/rok_data';
import cod_packages from '../utils/data/cod_data';
import Breadcrumb from '../components/Breadcrumb';
import Package from '../components/package';

const Detail = (type) => {
  const { number } = useParams();
  const navigate = useNavigate();

  var item
  if (type.type === 'rok') {
    item = rok_packages.find((p) => p.id == number);
  }
  else {
    item = cod_packages.find((p) => p.id == number);
  }

  const handleBuy = (item) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    let newItem = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    };

    const itemIndex = cart.findIndex((i) => i.id === item.id);

    if (itemIndex === -1) {
      cart.push(newItem);
    } else {
      cart[itemIndex].quantity++;
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    navigate('/cart');
  }

  return (
    item ? (
      <div className="detail">
        <div className="detail-heading">
          <img width={450} src={item.thumbnail_img} alt="thumbnail img" />
          <div className="detail-info">
            <Breadcrumb />
            <h1>{item.name}</h1>
            {
              item.is_reduce ? (
                <div className="detail-price">
                  <h3 className="detail-original-price">{item.price}</h3>
                  <h3 className="detail-reduced-price">{item.reduced_price}</h3>
                </div>
              ) : (
                <h3>{item.price}</h3>
              )
            }
          </div>
        </div>

        <h3 className='description-heading'>Mô tả</h3>

        <div className="detail-description">
          <img width={'90%'} src={item.description_img} alt="description img" />
          <button className='detail-description-add' onClick={() => handleBuy(item)}>Add to cart</button>
        </div>


        <div className="detail-others">
          <h1>Xem thêm các gói khác</h1>
          <div className="best-seller-list">
            {
              type.type == 'rok' ? (
                rok_packages.filter(p => p.id != item.id).map((p, i) => (
                  <Package key={i} {...p} type='rok' />
                ))
              ) : (
                cod_packages.filter(p => p.id != item.id).map((p, i) => (
                  <Package key={i} {...p} type='cod' />
                ))
              )
            }
          </div>
        </div>
      </div>
    ) : (
      <div className="not-found-item">
        <p>Package not found</p>
      </div>
    )
  );
};

export default Detail;
