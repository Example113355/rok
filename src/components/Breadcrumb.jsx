import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import rok_packages from '../utils/rok_data';
import cod_packages from '../utils/cod_data';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '/cart': 'Giỏ hàng',
    '/rok': 'Rise of Kingdom Bot',
    '/cod': 'Call of Dragon Bot',
    '/': 'Home',
  };

  rok_packages.forEach((item) => {
    breadcrumbNameMap[`/rok/${item.id}`] = item.name;
  });

  cod_packages.forEach((item) => {
    breadcrumbNameMap[`/cod/${item.id}`] = item.name;
  });
  return (
    <nav>
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = breadcrumbNameMap[to] || value;

          return isLast ? (
            <li key={to}>{name}</li>
          ) : (
            <li key={to}>
              <Link to={to}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
