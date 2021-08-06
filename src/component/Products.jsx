import React, { useContext } from 'react'
import { CartContext } from '../global/CartContext';
import { ProductsContext } from '../global/ProductsContext'

export const Product = () => {

    const { products } = useContext(ProductsContext);
    const { dispatch } = useContext(CartContext);

    return (
        <>
            {products.length !== 0 && <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-0">Featured Products</h1>}
            <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                {products.length === 0 && <div>slow internet...no products to display</div>}
                <div className='flex flex-wrap -m-4'>
                {products.map(product => (
                    <div className='lg:w-1/4 md:w-1/2 p-4 w-full' key={product.ProductID}>
                        <div className='block relative h-48 rounded overflow-hidden'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className="mt-4">
                            <div className='text-gray-900 title-font text-lg font-medium'>
                                {product.ProductName}
                            </div>
                            <div className='mt-1'>
                                Rs {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </div>
                    
                ))}
                </div>
            </div>
            </section>
        </>
    )
}