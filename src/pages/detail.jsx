import React from 'react';
import { useParams } from 'react-router-dom';
import packages from '../utils/data';
import Breadcrumb from '../components/Breadcrumb';
import Package from '../components/package';

const Detail = () => {
  const { number } = useParams();

  const item = packages.find((item) => item.id === parseInt(number));

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
        </div>

        <div className="detail-others">
          <h1>Xem thêm các gói khác</h1>
          <div className="best-seller-list">
            {
              packages.filter(p => (p.id != number)).map((p, i) => (
                <Package key={i} {...p} />
              ))
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
