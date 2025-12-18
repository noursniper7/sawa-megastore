import React from 'react';
import { navigationItems } from '../constants';

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  isSidebarOpen: boolean;
  currentProject: 'sawa' | 'onmedia' | 'crown' | 'global_cashbox' | 'global_settings' | null;
}

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, isSidebarOpen, currentProject }) => {
  const projectName = currentProject === 'sawa' ? 'سوا ميجاستور' : currentProject === 'onmedia' ? 'اون ميديا' : '';
  const projectColor = currentProject === 'sawa' ? 'pink' : 'indigo';

  const filteredNav = currentProject === 'onmedia'
    ? navigationItems.filter(item => ['dashboard', 'orders', 'cashbox'].includes(item.id))
    : navigationItems;

  return (
    <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:relative z-40 h-full w-64 bg-white border-l border-slate-100 transition-transform duration-300 ease-in-out flex flex-col shadow-sm`}>
      <div className="p-6 border-b border-slate-100">
        <h1 className="text-2xl font-black text-slate-800">{projectName}</h1>
        <p className="text-xs text-slate-400 font-bold mt-1">نظام الإدارة المتكامل</p>
      </div>
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {filteredNav.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm transition-all ${
              activeView === item.id
                ? `bg-${projectColor}-50 text-${projectColor}-700 border border-${projectColor}-100 shadow-sm`
                : 'text-slate-600 hover:bg-slate-50'
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
