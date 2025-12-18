import React from 'react';
import { User } from '../types';

interface HeaderProps {
  activeView: string;
  toggleSidebar: () => void;
  user: User;
  onLogout: () => void;
  currentProject: 'sawa' | 'onmedia' | 'crown' | 'global_cashbox' | 'global_settings' | null;
}

const Header: React.FC<HeaderProps> = ({ activeView, toggleSidebar, user, onLogout, currentProject }) => {
  const getTitle = () => {
    if (currentProject === 'global_cashbox') return 'الخزنة المركزية';
    if (currentProject === 'global_settings') return 'إعدادات المنصة';

    const titles: { [key: string]: string } = {
      dashboard: 'لوحة التحكم',
      orders: 'الأوردرات',
      customers: 'العملاء',
      products: 'المنتجات',
      inventory: 'المخزون',
      expenses: 'المصروفات',
      cashbox: 'الخزنة',
      reports: 'التقارير',
      ai_features: 'مساعد الذكاء الاصطناعي',
      settings: 'الإعدادات',
    };
    return titles[activeView] || 'لوحة التحكم';
  };

  return (
    <header className="bg-white border-b border-slate-100 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-slate-600 hover:text-slate-900">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 className="text-xl md:text-2xl font-black text-slate-800">{getTitle()}</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block text-right">
          <p className="text-sm font-bold text-slate-800">{user.name}</p>
          <p className="text-xs text-slate-400 font-bold">{user.role}</p>
        </div>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-all"
        >
          خروج
        </button>
      </div>
    </header>
  );
};

export default Header;
