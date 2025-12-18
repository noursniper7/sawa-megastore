import React, { useState } from 'react';
import { Order, Product, Customer, Transaction, Cashbox, OrderStatus } from '../types';
import { governorates } from '../constants';

interface OrdersProps {
  orders: Order[];
  products: Product[];
  customers: Customer[];
  transactions: Transaction[];
  cashboxes: Cashbox[];
  onUpdateOrders: (orders: Order[]) => void;
  onUpdateTransactions: (transactions: Transaction[]) => void;
  onUpdateCashboxes: (cashboxes: Cashbox[]) => void;
  onUpdateProducts: (products: Product[]) => void;
  onUpdateCustomers: (customers: Customer[]) => void;
}

const Orders: React.FC<OrdersProps> = ({ orders, products, customers, onUpdateOrders, onUpdateCustomers }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    governorate: '',
    items: [] as { productId: string; quantity: number }[],
  });

  const addOrder = () => {
    const shippingFee = governorates.find(g => g.name === newOrder.governorate)?.shippingFee || 0;
    const total = newOrder.items.reduce((sum, item) => {
      const product = products.find(p => p.id === item.productId);
      return sum + (product ? product.price * item.quantity : 0);
    }, 0) + shippingFee;

    const order: Order = {
      id: Date.now().toString(),
      customerName: newOrder.customerName,
      customerPhone: newOrder.customerPhone,
      customerAddress: newOrder.customerAddress,
      governorate: newOrder.governorate,
      shippingFee,
      date: new Date().toISOString(),
      total,
      status: OrderStatus.Created,
      items: newOrder.items,
    };

    onUpdateOrders([...orders, order]);
    setShowAddModal(false);
    setNewOrder({ customerName: '', customerPhone: '', customerAddress: '', governorate: '', items: [] });
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-800">الأوردرات</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-pink-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-pink-100 hover:bg-pink-700 transition-all"
        >
          إضافة أوردر جديد
        </button>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-black text-slate-800">{order.customerName}</p>
                  <p className="text-sm text-slate-500 font-bold">{order.customerPhone}</p>
                  <p className="text-xs text-slate-400 mt-1">{order.date}</p>
                </div>
                <div className="text-left">
                  <p className="font-black text-slate-800">{order.total} ج.م</p>
                  <span className="inline-block mt-2 px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold">
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-black text-slate-800 mb-6">أوردر جديد</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="اسم العميل"
                value={newOrder.customerName}
                onChange={(e) => setNewOrder({ ...newOrder, customerName: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="text"
                placeholder="رقم الهاتف"
                value={newOrder.customerPhone}
                onChange={(e) => setNewOrder({ ...newOrder, customerPhone: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="text"
                placeholder="العنوان"
                value={newOrder.customerAddress}
                onChange={(e) => setNewOrder({ ...newOrder, customerAddress: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <select
                value={newOrder.governorate}
                onChange={(e) => setNewOrder({ ...newOrder, governorate: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              >
                {governorates.map((gov) => (
                  <option key={gov.name} value={gov.name}>{gov.name}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={addOrder}
                className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-2xl font-black hover:bg-pink-700"
              >
                حفظ
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl font-black hover:bg-slate-200"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
