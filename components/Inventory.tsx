import React from 'react';
import { Product } from '../types';

interface InventoryProps {
  products: Product[];
}

const Inventory: React.FC<InventoryProps> = ({ products }) => {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <h2 className="text-2xl font-black text-slate-800">المخزون</h2>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-100">
                <th className="text-right py-4 px-4 font-black text-slate-800">المنتج</th>
                <th className="text-right py-4 px-4 font-black text-slate-800">كود المنتج</th>
                <th className="text-right py-4 px-4 font-black text-slate-800">الكمية المتاحة</th>
                <th className="text-right py-4 px-4 font-black text-slate-800">الحالة</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b border-slate-50 hover:bg-slate-50">
                  <td className="py-4 px-4 font-bold text-slate-800">{product.name}</td>
                  <td className="py-4 px-4 text-slate-500 font-bold">{product.sku}</td>
                  <td className="py-4 px-4 font-black text-slate-800">{product.stock}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-xs font-bold ${
                        product.stock < 10
                          ? 'bg-rose-50 text-rose-700'
                          : product.stock < 50
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-emerald-50 text-emerald-700'
                      }`}
                    >
                      {product.stock < 10 ? 'مخزون منخفض' : product.stock < 50 ? 'مخزون متوسط' : 'متوفر'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
