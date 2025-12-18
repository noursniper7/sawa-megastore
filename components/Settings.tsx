import React from 'react';
import { Product, Order, Transaction, Cashbox, User, Partner } from '../types';

interface SettingsProps {
  products: Product[];
  orders: Order[];
  transactions: Transaction[];
  cashboxes: Cashbox[];
  users: User[];
  partners: Partner[];
  onUpdateProducts: (products: Product[]) => void;
  onUpdateOrders: (orders: Order[]) => void;
  onUpdateTransactions: (transactions: Transaction[]) => void;
  onUpdateCashboxes: (cashboxes: Cashbox[]) => void;
  onUpdateUsers: (users: User[]) => void;
  onUpdatePartners: (partners: Partner[]) => void;
}

const Settings: React.FC<SettingsProps> = ({
  products,
  orders,
  transactions,
  cashboxes,
  users,
  partners,
  onUpdateProducts,
  onUpdateOrders,
  onUpdateTransactions,
  onUpdateCashboxes,
  onUpdateUsers,
  onUpdatePartners,
}) => {
  const exportData = () => {
    const data = {
      products,
      orders,
      transactions,
      cashboxes,
      users,
      partners,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `backup-${Date.now()}.json`;
    a.click();
  };

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target?.result as string);
          if (data.products) onUpdateProducts(data.products);
          if (data.orders) onUpdateOrders(data.orders);
          if (data.transactions) onUpdateTransactions(data.transactions);
          if (data.cashboxes) onUpdateCashboxes(data.cashboxes);
          if (data.users) onUpdateUsers(data.users);
          if (data.partners) onUpdatePartners(data.partners);
          alert('تم استيراد البيانات بنجاح');
        } catch (error) {
          alert('فشل في استيراد البيانات');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <h2 className="text-2xl font-black text-slate-800">الإعدادات</h2>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-lg text-slate-800 mb-6">النسخ الاحتياطي</h3>
        <div className="space-y-4">
          <button
            onClick={exportData}
            className="w-full md:w-auto px-6 py-3 bg-pink-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-pink-100 hover:bg-pink-700 transition-all"
          >
            تصدير البيانات
          </button>
          <div>
            <label className="block w-full md:w-auto px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl font-black text-sm text-center cursor-pointer hover:bg-slate-200 transition-all">
              استيراد البيانات
              <input
                type="file"
                accept=".json"
                onChange={importData}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-lg text-slate-800 mb-6">معلومات النظام</h3>
        <div className="space-y-3 text-sm font-bold text-slate-600">
          <p>عدد المنتجات: {products.length}</p>
          <p>عدد الأوردرات: {orders.length}</p>
          <p>عدد المعاملات: {transactions.length}</p>
          <p>عدد الخزنات: {cashboxes.length}</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-lg text-slate-800 mb-6">الشركاء</h3>
        <div className="space-y-4">
          {partners.length === 0 ? (
            <p className="text-center text-slate-400 font-bold py-8">لا يوجد شركاء حالياً</p>
          ) : (
            partners.map((partner) => (
              <div key={partner.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                <p className="font-black text-slate-800">{partner.name}</p>
                <p className="font-bold text-slate-600">مساهمة: {partner.contribution} ج.م</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
