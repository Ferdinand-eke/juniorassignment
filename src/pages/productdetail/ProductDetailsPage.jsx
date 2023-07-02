import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { eventDataSet, productData } from '../../static/data';
// import Footer from "../components/Layout/Footer";
// import Header from "../components/Layout/Header";
import ProductDetails from '../products/ProductDetails.jsx';
import SuggestedProduct from '../../components/Products/SuggestedProduct.jsx';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
// import { useSelector } from "react-redux";

const singleData = {
  id: 10,
  category: 'Music and Gaming',
  name: 'Gaming Headphone Asus with mutiple color and free delivery',
  description:
    "Product details are a crucial part of any eCommerce website or online marketplace. These details help the potential customers to make an informed decision about the product they are interested in buying. A well-written product description can also be a powerful marketing tool that can help to increase sales.Product details typically include information about the product's features, specifications, dimensions, weight, materials, and other relevant information that can help customers to understand the product better. The product details section should also include high-quality images and videos of the product, as well as customer reviews and ratings.",
  image_Url: [
    {
      public_id: 'test',
      url: 'https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
    {
      public_id: 'test',
      url: 'https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ],
  shop: {
    name: 'Asus Ltd',
    shop_avatar: {
      public_id: 'test',
      url: 'https://www.hatchwise.com/wp-content/uploads/2022/05/amazon-logo-1024x683.png',
    },
    ratings: 4.2,
  },
  price: 300,
  discount_price: 239,
  rating: 4.5,
  reviews: [
    {
      user: {
        // user object will be here
      },
      comment: "IT's so cool!",
      rating: 5,
    },
  ],
  total_sell: 20,
  stock: 10,
};
const ProductDetailsPage = () => {
  //   const name = useParams();
  //   const { allProducts } = useSelector((state) => state.products);
  const [allProducts, setAllProducts] = useState(productData);
  //   const { allEvents } = useSelector((state) => state.events);
  const [allEvents, setAllEvents] = useState(eventDataSet);
  const { id } = useParams();
  const [data, setData] = useState(singleData);
  //   const productName = name?.replace(/-/g, ' ');
  const [searchParams] = useSearchParams();
  const eventData = searchParams.get('isEvent');

  console.log('ProductUrl_ID', id);

  useEffect(
    () => {
      // if (eventData !== null) {
      //   const data = allEvents && allEvents.find((i) => i._id === id);
      //   setData(data);
      // } else {
      //   const data = allProducts && allProducts.find((i) => i._id === id);
      //   setData(data);
      // }
      //   const data = productData && productData?.find((i) => i.id === id);
      //   const data = productData?.find((i) => i.id === id);
      //   console.log('REALTIMEDATA', data);
      //   setData(data);
    }
    //   allEvents
    // [productData]
  );

  console.log(
    'Check_SENTDATA',
    productData?.find((i) => i.id === id)
  );

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {!eventData && <>{data && <SuggestedProduct data={data} />}</>}
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
