import React ,{ useContext} from 'react';
import { ShopContext } from '../context/ShopContext'
import {useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox.jsx';

 
const Product = () => {

  const { allProduct } = useContext(ShopContext);
  const { productId  } = useParams();
  const product = allProduct.find((e)=> e.id === Number(productId));

  return (
    <div className=''> 
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product;