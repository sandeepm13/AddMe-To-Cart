import React from 'react'
import { dummyOrders } from '../../assets/assets'

const Orders = () => {
  return (
    <div>
      <h1 className="text-3xl font-medium mb-6">Orders</h1>

      <div className="w-full overflow-x-auto">
        <div className="min-w-[1100px] border rounded-md bg-white">

          {/* HEADER */}
          <div className="grid grid-cols-[1.4fr_2fr_1fr_1.4fr_1fr_2fr] px-4 py-3 text-sm text-gray-700 bg-gray-100 border-b font-medium">
            <p>Order ID</p>
            <p>Product · Items</p>
            <p className="text-right">Amount</p>
            <p className="text-center">Payment</p>
            <p className="text-right">Date</p>
            <p>Address</p>
          </div>

          {/* ROWS */}
          {dummyOrders.map(o => {
            const itemsCount = o.items.reduce((sum, it) => sum + (it.quantity || 0), 0);
            const paidChip = o.isPaid
              ? 'bg-green-100 text-green-700 border-green-300'
              : 'bg-red-100 text-red-700 border-red-300';

            const addr = o.address
              ? `${o.address.street}, ${o.address.city}, ${o.address.state}`
              : '—';

            const first = o.items?.[0]?.product;

            return (
              <div
                key={o._id}
                className="grid grid-cols-[1.4fr_2fr_1fr_1.4fr_1fr_2fr] px-4 py-4 border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                {/* Order ID */}
                <p className="font-medium truncate">{o._id}</p>

                {/* Product */}
                <div className="flex items-center gap-3 min-w-0">
                  {first?.image?.[0] ? (
                    <img
                      src={first.image[0]}
                      alt={first.name}
                      className="w-10 h-10 rounded object-cover shrink-0"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded bg-gray-200 shrink-0" />
                  )}

                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{first?.name || '—'}</p>
                    <p className="text-xs text-gray-500">Items: {itemsCount}</p>
                  </div>
                </div>

                {/* Amount */}
                <p className="text-right font-semibold">₹ {o.amount}</p>

                {/* Payment */}
                <div className="flex items-center justify-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                    {o.paymentType}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full border ${paidChip}`}>
                    {o.isPaid ? 'Paid' : 'Unpaid'}
                  </span>
                </div>

                {/* Date */}
                <p className="text-right text-gray-600">
                  {new Date(o.createdAt).toLocaleString()}
                </p>

                {/* Address */}
                <p className="truncate text-gray-600" title={addr}>
                  {addr}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Orders;
