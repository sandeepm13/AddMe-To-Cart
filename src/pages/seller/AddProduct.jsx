import React from 'react'
import { assets } from '../../assets/assets'

const AddProduct = () => {
  const [name, setName] = React.useState('')
  const [category, setCategory] = React.useState('Vegetables')
  const [price, setPrice] = React.useState('')
  const [offerPrice, setOfferPrice] = React.useState('')
  const [inStock, setInStock] = React.useState(true)
  const [description, setDescription] = React.useState('')
  const [images, setImages] = React.useState([null, null, null, null])

  const onImageChange = (index, e) => {
    const f = e.target.files?.[0]
    if (f) {
      setImages(prev => {
        const next = [...prev]
        next[index] = URL.createObjectURL(f)
        return next
      })
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1 className="text-3xl font-medium mb-6">Add Product</h1>
      <form onSubmit={onSubmit} className="grid gap-4 max-w-2xl">
        <div>
          <p className="mb-1">Product Name</p>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="border border-gray-200 rounded w-full p-2 outline-primary" placeholder="type here" required/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="mb-1">Category</p>
            <select value={category} onChange={(e)=>setCategory(e.target.value)} className="border border-gray-200 rounded w-full p-2 outline-primary">
              <option>Vegetables</option>
              <option>Fruits</option>
              <option>Drinks</option>
              <option>Instant</option>
              <option>Dairy</option>
              <option>Bakery</option>
              <option>Grains</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="mb-1">Price</p>
              <input value={price} onChange={(e)=>setPrice(e.target.value)} type="number" className="border border-gray-200 rounded w-full p-2 outline-primary" placeholder="0" required />
            </div>
            <div>
              <p className="mb-1">Offer Price</p>
              <input value={offerPrice} onChange={(e)=>setOfferPrice(e.target.value)} type="number" className="border border-gray-200 rounded w-full p-2 outline-primary" placeholder="0" />
            </div>
          </div>
        </div>
        <div>
          <p className="mb-1">Description</p>
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} rows={4} className="border border-gray-200 rounded w-full p-2 outline-primary" placeholder="Short description"/>
        </div>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, idx) => (
              <label key={idx} className="cursor-pointer w-28 h-28 border border-gray-200 rounded flex items-center justify-center overflow-hidden bg-gray-50">
                {img ? (
                  <img src={img} alt={`preview-${idx}`} className="w-full h-full object-cover" />
                ) : (
                  <img src={assets.upload_area} alt="upload" className="w-10 opacity-70" />
                )}
                <input onChange={(e)=>onImageChange(idx, e)} type="file" accept="image/*" className="hidden" />
              </label>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input id="instock" type="checkbox" checked={inStock} onChange={(e)=>setInStock(e.target.checked)} />
            <label htmlFor="instock">In Stock</label>
          </div>
        </div>
        <button className="bg-primary hover:bg-primary-dull transition text-white px-6 py-2 rounded-md w-max">Save Product</button>
      </form>
    </div>
  )
}

export default AddProduct
