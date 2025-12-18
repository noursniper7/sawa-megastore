
import React from 'react';
import { OrderStatus } from './types';

export const navigationItems = [
  { id: 'dashboard', label: 'لوحة التحكم', icon: <HomeIcon /> },
  { id: 'orders', label: 'الأوردرات', icon: <ClipboardListIcon /> },
  { id: 'customers', label: 'العملاء', icon: <UsersIcon /> },
  { id: 'products', label: 'المنتجات', icon: <CubeIcon /> },
  { id: 'inventory', label: 'المخزون', icon: <ArchiveIcon /> },
  { id: 'expenses', label: 'المصروفات', icon: <CurrencyDollarIcon /> },
  { id: 'cashbox', label: 'الخزنة', icon: <CashIcon /> },
  { id: 'reports', label: 'التقارير', icon: <ChartBarIcon /> },
  { id: 'ai_features', label: 'مساعد الذكاء الاصطناعي', icon: <SparklesIcon /> },
  { id: 'settings', label: 'الإعدادات', icon: <CogIcon /> },
];

export const orderStatusColors: { [key in OrderStatus]: string } = {
  [OrderStatus.Created]: 'bg-blue-50 text-blue-700 border border-blue-100',
  [OrderStatus.Preparing]: 'bg-amber-50 text-amber-700 border border-amber-100',
  [OrderStatus.Shipped]: 'bg-indigo-50 text-indigo-700 border border-indigo-100',
  [OrderStatus.InTransit]: 'bg-violet-50 text-violet-700 border border-violet-100',
  [OrderStatus.Delivered]: 'bg-emerald-50 text-emerald-700 border border-emerald-100',
  [OrderStatus.Cancelled]: 'bg-rose-50 text-rose-700 border border-rose-100',
  [OrderStatus.Returned]: 'bg-slate-50 text-slate-700 border border-slate-100',
};

export const governorates = [
    { name: 'اختر محافظة', shippingFee: 0 },
    { name: 'القاهرة', shippingFee: 50 },
    { name: 'الجيزة', shippingFee: 50 },
    { name: 'الإسكندرية', shippingFee: 50 },
    { name: 'الدقهلية', shippingFee: 50 },
    { name: 'البحر الأحمر', shippingFee: 60 },
    { name: 'البحيرة', shippingFee: 50 },
    { name: 'الفيوم', shippingFee: 50 },
    { name: 'الغربية', shippingFee: 50 },
    { name: 'الإسماعيلية', shippingFee: 55 },
    { name: 'المنوفية', shippingFee: 50 },
    { name: 'المنيا', shippingFee: 60 },
    { name: 'القليوبية', shippingFee: 50 },
    { name: 'الوادي الجديد', shippingFee: 70 },
    { name: 'السويس', shippingFee: 55 },
    { name: 'أسوان', shippingFee: 70 },
    { name: 'أسيوط', shippingFee: 65 },
    { name: 'بني سويف', shippingFee: 55 },
    { name: 'بورسعيد', shippingFee: 50 },
    { name: 'دمياط', shippingFee: 50 },
    { name: 'الشرقية', shippingFee: 50 },
    { name: 'جنوب سيناء', shippingFee: 90 },
    { name: 'كفر الشيخ', shippingFee: 50 },
    { name: 'مطروح', shippingFee: 75 },
    { name: 'الأقصر', shippingFee: 75 },
    { name: 'قنا', shippingFee: 70 },
    { name: 'شمال سيناء', shippingFee: 90 },
    { name: 'سوهاج', shippingFee: 65 },
];


// SVG Icons
export function HomeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

export function ClipboardListIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

export function CubeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

export function ArchiveIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
    </svg>
  );
}

export function TruckIcon() {
    return (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path d="M18.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM8.5 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 6H5.5a2.5 2.5 0 0 0-2.5 2.5V15h16v-2.5a2.5 2.5 0 0 0-2.5-2.5h-2.5V6Z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 15H4a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1h1.5"/>
       </svg>
    )
}

export function CashIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
    );
}

export function ChartBarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}

export function SparklesIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
    )
}

export function UsersIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.978 5.978 0 0112 13a5.979 5.979 0 013 1" />
        </svg>
    )
}

export function WalletIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
    );
}

export function EyeIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.274 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  );
}

export function PencilIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
      <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
    </svg>
  );
}

export function TrashIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
        </svg>
    );
}

export function ShipIcon() {
  return (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 17H6V6h11v4l4 4v2h-3zM6 6L12 3l8 4" />
    </svg>
  );
}

export function PrinterIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6L6.75 4.5c0-.828.672-1.5 1.5-1.5h7.5c.828 0 1.5.672 1.5 1.5V6M3.375 6h17.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125H3.375A1.125 1.125 0 012.25 15.375v-8.25c0-.621.504-1.125 1.125-1.125zM6 18h12c.621 0 1.125-.504 1.125-1.125V13.5H4.875v3.375c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

export function CheckCircleIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    );
}

export function CurrencyDollarIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    )
}

export function CogIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    )
}
