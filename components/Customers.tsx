import React from 'react';
import { Customer, Order } from '../types';

interface CustomersProps {
  customers: Customer[];
  orders: Order[];
  onUpdateCustomers: (customers: Customer[]) => void;
}

const Customers: React.FC<CustomersProps> = ({ customers, orders }) => {
  return (
    <div className="space-y-6 animate-fade-in-up">
      <h2 className="text-2xl font-black text-slate-800">العملاء</h2>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <div className="space-y-4">
          {customers.length === 0 ? (
            <p className="text-center text-slate-400 font-bold py-12">لا يوجد عملاء حتى الآن</p>
          ) : (
            customers.map((customer) => {
              const customerOrders = orders.filter(o => o.customerId === customer.id);
              return (
                <div key={customer.id} className="p-6 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-black text-slate-800">{customer.name}</p>
                      <p className="text-sm text-slate-500 font-bold">{customer.phone}</p>
                      {customer.address && <p className="text-xs text-slate-400 mt-1">{customer.address}</p>}
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-slate-600">عدد الطلبات: {customerOrders.length}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Customers;
