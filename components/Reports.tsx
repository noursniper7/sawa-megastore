import React from 'react';
import { Order, Product, Transaction } from '../types';

interface ReportsProps {
  orders: Order[];
  products: Product[];
  transactions: Transaction[];
}

const Reports: React.FC<ReportsProps> = ({ orders, products, transactions }) => {
  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const totalExpenses = transactions
    .filter(t => t.type === 'سحب')
    .reduce((sum, t) => sum + t.amount, 0);
  const netProfit = totalRevenue - totalExpenses;

  return (
    <div className="space-y-6 animate-fade-in-up">
      <h2 className="text-2xl font-black text-slate-800">التقارير المالية</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-[2.5rem] border border-emerald-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">إجمالي الإيرادات</p>
          <p className="text-4xl font-black text-emerald-600">{totalRevenue.toFixed(2)} ج.م</p>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-rose-100 shadow-sm">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">إجمالي المصروفات</p>
          <p className="text-4xl font-black text-rose-600">{totalExpenses.toFixed(2)} ج.م</p>
        </div>
        <div className="bg-gradient-to-br from-pink-600 to-rose-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-pink-100">
          <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-2">صافي الربح</p>
          <p className="text-4xl font-black">{netProfit.toFixed(2)} ج.م</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-lg text-slate-800 mb-6">أفضل المنتجات مبيعاً</h3>
        <div className="space-y-4">
          {products.slice(0, 5).map((product) => (
            <div key={product.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
              <div>
                <p className="font-black text-slate-800">{product.name}</p>
                <p className="text-xs text-slate-400 font-bold">{product.sku}</p>
              </div>
              <p className="font-black text-pink-600">{product.price} ج.م</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reports;
