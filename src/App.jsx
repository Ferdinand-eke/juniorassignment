import { useState } from 'react';
import { useRoutes } from 'react-router-dom';
import {
  BestSellingPage,
  EventsPage,
  FAQPage,
  ForgotPasswordPage,
  HomePage,
  LoginPage,
  ProductDetailsPage,
  ProductsPage,
  RegisterPage,
} from './routes/routes';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const routes = [
    // {
    //   path: '/',
    //   element: <HomePage />,
    //   children: [

    //   ],
    // },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'sign-up',
      element: <RegisterPage />,
    },
    {
      path: 'products',
      element: <ProductsPage />,
    },
    {
      path: 'product/:id',
      element: <ProductDetailsPage />,
    },
    {
      path: 'best-selling',
      element: <BestSellingPage />,
    },
    {
      path: 'events',
      element: <EventsPage />,
    },
    {
      path: 'faq',
      element: <FAQPage />,
    },
  ];

  // return ( FAQPage
  //   <>
  //     <h1 className="text-3xl font-bold underline">
  //       Hello world! scan<span className="text-[#50d71e]">Mart</span> is coming!
  //     </h1>
  //   </>
  // );

  return useRoutes(routes);
}

export default App;
