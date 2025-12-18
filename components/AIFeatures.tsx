import React, { useState } from 'react';
import { Product, Order } from '../types';

interface AIFeaturesProps {
  products: Product[];
  orders: Order[];
}

const AIFeatures: React.FC<AIFeaturesProps> = ({ products, orders }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleAIQuery = async () => {
    setResponse('مساعد الذكاء الاصطناعي قيد التطوير. سيتم إضافة تحليلات ذكية قريباً.');
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <h2 className="text-2xl font-black text-slate-800">مساعد الذكاء الاصطناعي</h2>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="mb-6">
          <label className="block font-bold text-slate-700 mb-2">اسأل المساعد الذكي</label>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
            rows={4}
            placeholder="مثال: ما هي المنتجات الأكثر مبيعاً هذا الشهر؟"
          />
        </div>
        <button
          onClick={handleAIQuery}
          className="px-6 py-3 bg-pink-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-pink-100 hover:bg-pink-700 transition-all"
        >
          إرسال
        </button>

        {response && (
          <div className="mt-6 p-6 bg-slate-50 rounded-xl border border-slate-100">
            <p className="font-bold text-slate-700">{response}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <h3 className="font-black text-slate-800 mb-4">تحليلات ذكية</h3>
          <p className="text-sm text-slate-500 font-bold">احصل على رؤى مدعومة بالذكاء الاصطناعي حول مبيعاتك ومنتجاتك</p>
        </div>
        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
          <h3 className="font-black text-slate-800 mb-4">توقعات المبيعات</h3>
          <p className="text-sm text-slate-500 font-bold">تنبؤات دقيقة لمساعدتك في التخطيط المستقبلي</p>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
