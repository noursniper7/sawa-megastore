
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders';
import Products from './components/Products';
import Inventory from './components/Inventory';
import Reports from './components/Reports';
import AIFeatures from './components/AIFeatures';
import Cashbox from './components/Cashbox';
import Expenses from './components/Expenses';
import Settings from './components/Settings';
import Customers from './components/Customers';
import { mockProducts, mockOrders, mockTransactions, mockCashboxes } from './data/mockData';
import { Product, Order, Transaction, Cashbox as CashboxType, Partner, Customer } from './types';

const OnMediaDashboard = ({ projects }: any) => (
    <div className="space-y-6 animate-fade-in-up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-indigo-100 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">المشاريع النشطة</p>
                <p className="text-4xl font-black text-indigo-600">{projects.length}</p>
            </div>
            <div className="bg-white p-8 rounded-[2.5rem] border border-indigo-100 shadow-sm">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">ساعات العمل</p>
                <p className="text-4xl font-black text-slate-800">0</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-indigo-100">
                <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-2">ميزانية الإنتاج</p>
                <p className="text-3xl font-black">0 <span className="text-sm">ج.م</span></p>
            </div>
        </div>
        <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
            <h3 className="font-black text-lg text-slate-800 mb-6">قائمة مشاريع الميديا</h3>
            <div className="space-y-4">
                {projects.length > 0 ? (
                    projects.map((p: any) => (
                        <div key={p.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 hover:border-indigo-200 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-black group-hover:bg-indigo-600 group-hover:text-white transition-all">#</div>
                                <div>
                                    <p className="font-black text-slate-800">{p.name}</p>
                                    <p className="text-xs text-slate-400 font-bold">{p.client} • ميزانية: {p.total} ج.م</p>
                                </div>
                            </div>
                            <span className="px-5 py-2 bg-white text-[10px] font-black text-indigo-600 rounded-full border border-indigo-100 shadow-sm">{p.status}</span>
                        </div>
                    ))
                ) : (
                    <div className="py-12 text-center text-slate-400 font-bold italic">لا توجد مشاريع ميديا حالياً.</div>
                )}
            </div>
        </div>
    </div>
);

const CrownDashboard = () => (
    <div className="p-10 text-center animate-fade-in-up">
        <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 text-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
        </div>
        <h2 className="text-3xl font-black text-slate-800">نظام كراون للتميز</h2>
        <p className="text-slate-400 font-bold mt-2">إدارة خدمات كبار العملاء والولاء</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-right">
                <h4 className="font-black text-amber-600 mb-2">برامج الولاء</h4>
                <p className="text-sm text-slate-500 font-bold">تتبع نقاط العملاء والمكافآت الحصرية.</p>
             </div>
             <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-right">
                <h4 className="font-black text-amber-600 mb-2">خدمات الـ VIP</h4>
                <p className="text-sm text-slate-500 font-bold">إدارة الطلبات الخاصة والتعامل المميز.</p>
             </div>
        </div>
    </div>
);

type ProjectType = 'sawa' | 'onmedia' | 'crown' | 'global_cashbox' | 'global_settings' | null;

const Hub: React.FC<{ onSelect: (project: ProjectType) => void }> = ({ onSelect }) => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 animate-fade-in">
            <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-4 tracking-tight">إدارة شركات <span className="text-slate-900">تميم و اَدم</span></h1>
                <p className="text-slate-500 text-lg font-bold">اختر المنصة للبدء في الإدارة</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {/* Sawa */}
                <button onClick={() => onSelect('sawa')} className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-pink-100 transition-all duration-500 border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-pink-50 text-pink-600 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-pink-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 mb-2">سوا ميجاستور</h2>
                    <p className="text-slate-500 text-sm font-bold">التجارة والمخازن</p>
                    <div className="mt-8 px-10 py-3 bg-pink-600 text-white rounded-2xl font-black text-xs shadow-lg shadow-pink-100">دخول</div>
                </button>

                {/* On Media */}
                <button onClick={() => onSelect('onmedia')} className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 mb-2">اون ميديا</h2>
                    <p className="text-slate-500 text-sm font-bold">الإنتاج والميديا</p>
                    <div className="mt-8 px-10 py-3 bg-indigo-600 text-white rounded-2xl font-black text-xs shadow-lg shadow-indigo-100">دخول</div>
                </button>

                {/* Crown */}
                <button onClick={() => onSelect('crown')} className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-amber-100 transition-all duration-500 border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-2">
                    <div className="w-20 h-20 bg-amber-50 text-amber-600 rounded-3xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-500 group-hover:-rotate-12">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                    </div>
                    <h2 className="text-2xl font-black text-slate-800 mb-2">كراون</h2>
                    <p className="text-slate-500 text-sm font-bold">التميز والولاء</p>
                    <div className="mt-8 px-10 py-3 bg-amber-500 text-white rounded-2xl font-black text-xs shadow-lg shadow-amber-100">دخول</div>
                </button>
            </div>
            
            <div className="mt-12 flex gap-4">
                <button onClick={() => onSelect('global_cashbox')} className="bg-white border border-slate-100 px-8 py-4 rounded-2xl font-black text-slate-700 hover:bg-slate-900 hover:text-white transition-all shadow-sm">الخزنة المركزية</button>
                <button onClick={() => onSelect('global_settings')} className="bg-white border border-slate-100 px-8 py-4 rounded-2xl font-black text-slate-700 hover:bg-slate-900 hover:text-white transition-all shadow-sm">إعدادات المنصة</button>
            </div>
        </div>
    );
};

const App: React.FC = () => {
  const [currentProject, setCurrentProject] = useState<ProjectType>(null);
  const [activeView, setActiveView] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // States with direct initialization to ensure "it works" immediately
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('sawa_products_v1');
    return saved ? JSON.parse(saved) : mockProducts;
  });
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('sawa_orders_v1');
    return saved ? JSON.parse(saved) : mockOrders;
  });
  const [customers, setCustomers] = useState<Customer[]>(() => {
    const saved = localStorage.getItem('sawa_customers_v1');
    return saved ? JSON.parse(saved) : [];
  });
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('sawa_transactions_v1');
    return saved ? JSON.parse(saved) : mockTransactions;
  });
  const [cashboxes, setCashboxes] = useState<CashboxType[]>(() => {
    const saved = localStorage.getItem('sawa_cashboxes_v2');
    return saved ? JSON.parse(saved) : mockCashboxes;
  });
  const [partners, setPartners] = useState<Partner[]>(() => {
    const saved = localStorage.getItem('sawa_partners_v1');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [onMediaProjects, setOnMediaProjects] = useState<any[]>(() => {
      const saved = localStorage.getItem('onmedia_projects_v1');
      return saved ? JSON.parse(saved) : [];
  });

  // Persist states
  useEffect(() => {
    localStorage.setItem('sawa_products_v1', JSON.stringify(products));
    localStorage.setItem('sawa_orders_v1', JSON.stringify(orders));
    localStorage.setItem('sawa_customers_v1', JSON.stringify(customers));
    localStorage.setItem('sawa_transactions_v1', JSON.stringify(transactions));
    localStorage.setItem('sawa_cashboxes_v2', JSON.stringify(cashboxes));
    localStorage.setItem('sawa_partners_v1', JSON.stringify(partners));
    localStorage.setItem('onmedia_projects_v1', JSON.stringify(onMediaProjects));
  }, [products, orders, customers, transactions, cashboxes, partners, onMediaProjects]);

  const renderView = () => {
    if (currentProject === 'global_cashbox') return <Cashbox transactions={transactions} cashboxes={cashboxes} onUpdateTransactions={setTransactions} onUpdateCashboxes={setCashboxes} />;
    if (currentProject === 'global_settings') return <Settings products={products} orders={orders} transactions={transactions} cashboxes={cashboxes} users={[]} partners={partners} onUpdateProducts={setProducts} onUpdateOrders={setOrders} onUpdateTransactions={setTransactions} onUpdateCashboxes={setCashboxes} onUpdateUsers={()=>{}} onUpdatePartners={setPartners} />;

    if (currentProject === 'onmedia') {
        switch(activeView) {
            case 'dashboard': return <OnMediaDashboard projects={onMediaProjects} />;
            case 'orders': return <div className="p-8 bg-white rounded-[2rem] border border-slate-100 text-center font-black">إدارة مشاريع الإنتاج</div>;
            case 'cashbox': return <Cashbox transactions={transactions} cashboxes={cashboxes} onUpdateTransactions={setTransactions} onUpdateCashboxes={setCashboxes} />;
            default: return <OnMediaDashboard projects={onMediaProjects} />;
        }
    }
    
    if (currentProject === 'crown') return <CrownDashboard />;

    // Sawa Megastore
    switch (activeView) {
      case 'dashboard': return <Dashboard orders={orders} products={products} />;
      case 'orders': return <Orders orders={orders} products={products} customers={customers} transactions={transactions} cashboxes={cashboxes} onUpdateOrders={setOrders} onUpdateTransactions={setTransactions} onUpdateCashboxes={setCashboxes} onUpdateProducts={setProducts} onUpdateCustomers={setCustomers} />;
      case 'customers': return <Customers customers={customers} orders={orders} onUpdateCustomers={setCustomers} />;
      case 'products': return <Products products={products} onUpdateProducts={setProducts} />;
      case 'inventory': return <Inventory products={products} />;
      case 'expenses': return <Expenses transactions={transactions} products={products} cashboxes={cashboxes} onUpdateTransactions={setTransactions} onUpdateProducts={setProducts} onUpdateCashboxes={setCashboxes} />;
      case 'cashbox': return <Cashbox transactions={transactions} cashboxes={cashboxes} onUpdateTransactions={setTransactions} onUpdateCashboxes={setCashboxes} />;
      case 'reports': return <Reports orders={orders} products={products} transactions={transactions} />;
      case 'ai_features': return <AIFeatures products={products} orders={orders} />;
      case 'settings': return <Settings products={products} orders={orders} transactions={transactions} cashboxes={cashboxes} users={[]} partners={partners} onUpdateProducts={setProducts} onUpdateOrders={setOrders} onUpdateTransactions={setTransactions} onUpdateCashboxes={setCashboxes} onUpdateUsers={()=>{}} onUpdatePartners={setPartners} />;
      default: return <Dashboard orders={orders} products={products} />;
    }
  };

  if (!currentProject) return <Hub onSelect={setCurrentProject} />;

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800 animate-fade-in font-['Cairo']">
        {(currentProject === 'sawa' || currentProject === 'onmedia') && (
            <Sidebar activeView={activeView} setActiveView={setActiveView} isSidebarOpen={isSidebarOpen} currentProject={currentProject} />
        )}
        {isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-30 md:hidden"></div>}
        <div className="flex-1 flex flex-col overflow-hidden">
            <Header activeView={activeView} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} user={{id:'1', name:'المسؤول', email:'', role: 'Admin' as any}} onLogout={() => setCurrentProject(null)} currentProject={currentProject} />
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
                <div className="animate-fade-in-up max-w-7xl mx-auto">{renderView()}</div>
            </main>
        </div>
    </div>
  );
};

export default App;
