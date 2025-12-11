import React from 'react'
import { dummyProducts } from '../../assets/assets'

const ProductList = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-6">Product List</h1>
      <div className="w-full overflow-x-auto">
        <div className="min-w-[640px] divide-y border rounded-md bg-white">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] px-4 py-3 text-sm text-gray-500">
            <p>Name</p>
            <p>Category</p>
            <p>Price</p>
            <p>Status</p>
          </div>
          {dummyProducts.map(p => (
            <div key={p._id} className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center px-4 py-3">
              <div className="flex items-center gap-3">
                <img src={p.image?.[0]} alt={p.name} className="w-10 h-10 rounded object-cover" />
                <div>
                  <p className="font-medium line-clamp-1">{p.name}</p>
                </div>
              </div>
              <p>{p.category}</p>
              <p>₹ {p.offerPrice ?? p.price}</p>
              <p className={p.inStock ? 'text-green-600' : 'text-red-600'}>{p.inStock ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
