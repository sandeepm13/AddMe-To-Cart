import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { assets } from '../../assets/assets'

const SellerLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[240px_1fr]">
      <aside className="border-r bg-white p-4 md:p-6">
        <p className="text-2xl font-medium mb-6">Seller Panel</p>
        <nav className="flex flex-col gap-2 text-gray-600">
          <NavLink to="/seller" end className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded-md ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
            <img src={assets.add_icon} alt="add" className="w-5 h-5" />
            <span>Add Product</span>
          </NavLink>
          <NavLink to="/seller/product-list" className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded-md ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
            <img src={assets.product_list_icon} alt="products" className="w-5 h-5" />
            <span>Product List</span>
          </NavLink>
          <NavLink to="/seller/orders" className={({isActive}) => `flex items-center gap-3 px-3 py-2 rounded-md ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-gray-100'}`}>
            <img src={assets.order_icon} alt="orders" className="w-5 h-5" />
            <span>Orders</span>
          </NavLink>
        </nav>
      </aside>
      <main className="p-6 md:p-8 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  )
}

export default SellerLayout
