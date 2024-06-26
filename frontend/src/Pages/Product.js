import React, { useContext } from 'react'
import BreadCrum from '../Components/BreadCrum'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay';
import RelatedProducts from '../Components/RelatedProducts';
import Description from '../Components/Description';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <RelatedProducts/>
    </div>
  )
}

export default Product