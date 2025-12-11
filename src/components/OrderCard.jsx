import React from 'react'

const statusColor = (status) => {
  switch (status) {
    case 'Order Placed':
      return 'bg-blue-100 text-blue-700 border-blue-200'
    case 'Shipped':
      return 'bg-amber-100 text-amber-700 border-amber-200'
    case 'Out for Delivery':
      return 'bg-indigo-100 text-indigo-700 border-indigo-200'
    case 'Delivered':
      return 'bg-green-100 text-green-700 border-green-200'
    case 'Cancelled':
      return 'bg-red-100 text-red-700 border-red-200'
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200'
  }
}

const OrderCard = ({ order, currency = '₹' }) => {
  const formattedDate = new Date(order.createdAt).toLocaleString()

  return (
    <div className="w-full border rounded-xl p-4 md:p-5 mb-4 hover:shadow-sm transition-shadow bg-white">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm text-gray-500">Order ID</p>
          <p className="text-base md:text-lg font-medium">{order._id}</p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1 text-sm border rounded-full ${statusColor(order.status)}`}>{order.status}</span>
          <div className="text-sm text-gray-500">{formattedDate}</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="flex items-center justify-between pb-2 border-b text-gray-500 text-sm">
            <p>Product</p>
            <div className="grid grid-cols-3 gap-6 w-48 text-right">
              <p>Qty</p>
              <p>Price</p>
              <p>Total</p>
            </div>
          </div>
          <div className="divide-y">
            {order.items.map((it) => {
              const price = it.product.offerPrice ?? it.product.price ?? 0
              const lineTotal = Math.round(price * it.quantity * 100) / 100
              return (
                <div key={it._id} className="flex items-center justify-between py-3">
                  <div className="flex items-center gap-3">
                    {it.product.image?.[0] ? (
                      <img src={it.product.image[0]} alt={it.product.name} className="w-14 h-14 object-cover rounded" />
                    ) : (
                      <div className="w-14 h-14 bg-gray-100 rounded" />
                    )}
                    <div>
                      <p className="font-medium line-clamp-1">{it.product.name}</p>
                      <p className="text-xs text-gray-500">{it.product.category}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6 w-48 text-right">
                    <p>{it.quantity}</p>
                    <p>{currency} {price}</p>
                    <p className="font-medium">{currency} {lineTotal}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="md:pl-4">
          <div className="rounded-lg border p-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <p className="text-gray-500">Payment</p>
              <p className="font-medium">{order.paymentType}{order.isPaid ? ' • Paid' : ''}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-gray-500">Total Amount</p>
              <p className="text-lg font-semibold">{currency} {order.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
