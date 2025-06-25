import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Review (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform for buying and selling products or services. It includes features like product catalogs, detailed pages, shopping carts, and secure checkouts for a seamless user experience. Customers can create accounts to track orders and enjoy mobile-friendly browsing. Marketing tools like discounts and social media integration boost engagement, while analytics track performance.</p>
            <p>It can buy and sell products or services over the internet. These websites serve as virtual storefronts that enable customers to browse, select, and purchase items from the comfort of their homes.</p>
        </div>
    </div>
  )
}

export default DescriptionBox