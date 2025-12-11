import React, { useEffect, useState } from 'react'
import { dummyOrders } from '../assets/assets'
import OrderCard from '../components/OrderCard'
import { useAppContext } from '../context/AppContext'

const MyOrders = () => {
  const { currency } = useAppContext()
  const [orders, setOrders] = useState([])

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('orders') || '[]')
      setOrders(stored.length ? stored : dummyOrders)
    } catch (e) {
      setOrders(dummyOrders)
    }
  }, [])

  return (
    <div className="mt-16">
      <h1 className="text-3xl font-medium mb-6">My Orders <span className="text-sm text-primary">{orders.length} Orders</span></h1>

      {orders.length === 0 ? (
        <div className="text-gray-500">You have no orders yet.</div>
      ) : (
        <div>
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} currency={currency} />
          ))}
        </div>
      )}
    </div>
  )
}

export default MyOrders
