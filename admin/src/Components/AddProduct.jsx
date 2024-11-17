import React, { useState } from 'react'
import upload_area from '../Assets/upload_area.svg'
const AddProduct = () => {
    const [image, SetImage] = useState(false);
    const [productDetails, SetProductDetails ] =useState({
        name:'',
        image:'',
        category:'women',
        new_price:'',
        old_price:''
    })
    const imageHandler = (e) => {
        SetImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        SetProductDetails({...productDetails,[e.target.name]:e.target.value})
    }
    const Add_Product = async () => {
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product',image);

        await fetch('https://ecommerce-8dzq.onrender.com/upload',{
            method:'POST',
            headers:{
                Accept:'application/json'
            },
            body:formData,
        }).then((resp)=>resp.json()).then((data)=>{responseData=data})

        if(responseData.success){
            product.image = responseData.image_url;
            console.log(product);
            await fetch('https://ecommerce-8dzq.onrender.com/addproduct',{
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'Content-type':'application/json'
                },
                body:JSON.stringify(product),
            }).then((resp)=>resp.json()).then((data)=>{
                data.success?alert('Product Added'):alert('Failed')
            })
        }
    }
  return (
    <div className="flex flex-col gap-8 my-10 mx-auto w-full max-w-4xl px-4 sm:px-8">
  {/* Product Title */}
  <div className="w-full">
    <p className="tracking-wide text-gray-700 text-lg font-bold mb-2">Product title</p>
    <input
      className="appearance-none block w-full sm:w-4/5 bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      value={productDetails.name}
      onChange={changeHandler}
      type="text"
      name="name"
      placeholder="Type Here"
    />
  </div>

  {/* Price and Offer Price */}
  <div className="flex flex-col sm:flex-row gap-8">
    <div className="w-full sm:w-1/2">
      <p className="tracking-wide text-gray-700 text-lg font-bold mb-2">Price</p>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        value={productDetails.old_price}
        onChange={changeHandler}
        type="text"
        name="old_price"
        placeholder="Type Here"
      />
    </div>
    <div className="w-full sm:w-1/2">
      <p className="tracking-wide text-gray-700 text-lg font-bold mb-2">Offer Price</p>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        value={productDetails.new_price}
        onChange={changeHandler}
        type="text"
        name="new_price"
        placeholder="Type Here"
      />
    </div>
  </div>

  {/* Product Category */}
  <div>
    <p className="tracking-wide text-gray-700 text-lg font-bold mb-2">Product Category</p>
    <select
      className="block appearance-none w-full sm:w-1/2 bg-gray-200 text-gray-700 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      value={productDetails.category}
      onChange={changeHandler}
      name="category"
    >
      <option value="women">Women</option>
      <option value="men">Men</option>
      <option value="kids">Kids</option>
    </select>
  </div>

  {/* Image Input */}
  <div>
    <label
      className="block tracking-wide text-gray-700 text-lg font-bold mb-2"
      htmlFor="file-input"
    >
      Image
      <img
        className="my-4 h-32 w-auto object-contain border"
        src={image ? URL.createObjectURL(image) : upload_area}
        alt=""
      />
    </label>
    <input
      onChange={imageHandler}
      type="file"
      name="image"
      id="file-input"
      hidden
    />
  </div>

  {/* Submit Button */}
  <button
    className="w-full sm:w-1/4 mx-auto bg-gray-500 text-white font-bold py-2 px-4 border border-gray-700 rounded-lg transition duration-200 hover:bg-gray-700"
    onClick={Add_Product}
  >
    ADD
  </button>
</div>

  )
}

export default AddProduct