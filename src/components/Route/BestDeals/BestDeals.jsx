import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import ProductCard from '../ProductCard/ProductCard.jsx';
import { productData } from '../../../static/data';
import styles from '../../../styles/style';

const BestDeals = () => {
  const [data, setData] = useState([]);
  // const { allProducts } = useSelector((state) => state.products);
  const [allProducts, setAllProducts] = useState(productData);

  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a, b) => b.sold_out - a.sold_out);
    const firstFive = sortedData && sortedData.slice(0, 5);
    console.log('FirstFIVE', firstFive);
    setData(firstFive);
  }, [allProducts]);

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Best Deals</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
          {data && data.length !== 0 && (
            <>
              {data &&
                data.map((i, index) => <ProductCard data={i} key={index} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
