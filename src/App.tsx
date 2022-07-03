import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import './App.scss';
import ProductDetails from './components/productDetails/ProductDetails';
import ProductImage from './components/productImage/ProductImage';
import ProductShipping from './components/productShipping/ProductShipping';
import ProductModel from './models/ProductModel';
import fetchData from './services/ProductService';

const App = () => {
  const [statusMessage, setStatusMessage] = useState();

  const { data, status } = useQuery('product-data', fetchData);
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  if (status === 'error') {
    return <div>Error!</div>;
  }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div
            className="col-xs-12
                     col-sm-8
                     col-md-4
                     col-lg-4"
          >
            <ProductImage data={data.product.gallery[0].main} />
          </div>
          <div
            className="col-xs-12
                     col-sm-8
                     col-md-5
                     col-lg-5"
          >
            <ProductDetails product={data.product} />

          </div>
          <div
            className="col-xs-12
                     col-sm-8
                     col-md-3
                     col-lg-3
                     "
          >
            <ProductShipping product={data.product} />
          </div>
        </div>
      </div>
    </div>

  );
};

export default App;
