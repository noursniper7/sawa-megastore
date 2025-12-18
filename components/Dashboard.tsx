import React from 'react';
import { Order, Product } from '../types';

interface DashboardProps {
  orders: Order[];
  products: Product[];
}

const Dashboard: React.FC<DashboardProps> = ({ orders, products }) => {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalOrders = orders.length;
  const lowStockProducts = products.filter(p => p.stock < 10).length;

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2.5rem] border border-pink-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">إجمالي المبيعات</p>
          <p className="text-4xl font-black text-pink-600">{totalRevenue.toFixed(2)} ج.م</p>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">عدد الأوردرات</p>
          <p className="text-4xl font-black text-slate-800">{totalOrders}</p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-rose-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-pink-100">
          <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-2">منتجات تحتاج تعبئة</p>
          <p className="text-4xl font-black">{lowStockProducts}</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-lg text-slate-800 mb-6">أحدث الأوردرات</h3>
        <div className="space-y-4">
          {orders.slice(0, 5).map((order) => (
            <div key={order.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
              <div>
                <p className="font-black text-slate-800">{order.customerName}</p>
                <p className="text-xs text-slate-400 font-bold">{order.date}</p>
              </div>
              <div className="text-left">
                <p className="font-black text-slate-800">{order.total} ج.م</p>
                <span className="text-xs font-bold text-slate-500">{order.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
