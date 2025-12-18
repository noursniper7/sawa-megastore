import React, { useState } from 'react';
import { Transaction, Product, Cashbox, TransactionType } from '../types';

interface ExpensesProps {
  transactions: Transaction[];
  products: Product[];
  cashboxes: Cashbox[];
  onUpdateTransactions: (transactions: Transaction[]) => void;
  onUpdateProducts: (products: Product[]) => void;
  onUpdateCashboxes: (cashboxes: Cashbox[]) => void;
}

const Expenses: React.FC<ExpensesProps> = ({ transactions, cashboxes, onUpdateTransactions, onUpdateCashboxes }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExpense, setNewExpense] = useState({
    amount: 0,
    description: '',
    cashboxId: cashboxes[0]?.id || '1',
  });

  const addExpense = () => {
    const transaction: Transaction = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      type: TransactionType.Withdrawal,
      amount: newExpense.amount,
      description: newExpense.description,
      cashboxId: newExpense.cashboxId,
    };

    const updatedCashboxes = cashboxes.map(cb => {
      if (cb.id === newExpense.cashboxId) {
        return { ...cb, balance: cb.balance - newExpense.amount };
      }
      return cb;
    });

    onUpdateTransactions([...transactions, transaction]);
    onUpdateCashboxes(updatedCashboxes);
    setShowAddModal(false);
    setNewExpense({ amount: 0, description: '', cashboxId: cashboxes[0]?.id || '1' });
  };

  const expenses = transactions.filter(t => t.type === TransactionType.Withdrawal);
  const totalExpenses = expenses.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-800">المصروفات</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-pink-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-pink-100 hover:bg-pink-700 transition-all"
        >
          إضافة مصروف
        </button>
      </div>

      <div className="bg-gradient-to-br from-rose-600 to-red-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-rose-100">
        <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-2">إجمالي المصروفات</p>
        <p className="text-5xl font-black">{totalExpenses.toFixed(2)} ج.م</p>
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-lg text-slate-800 mb-6">سجل المصروفات</h3>
        <div className="space-y-4">
          {expenses.length === 0 ? (
            <p className="text-center text-slate-400 font-bold py-12">لا توجد مصروفات حتى الآن</p>
          ) : (
            expenses.slice(-20).reverse().map((expense) => (
              <div key={expense.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
                <div>
                  <p className="font-black text-slate-800">{expense.description}</p>
                  <p className="text-xs text-slate-400 font-bold">{new Date(expense.date).toLocaleDateString('ar-EG')}</p>
                </div>
                <p className="font-black text-rose-600">-{expense.amount.toFixed(2)} ج.م</p>
              </div>
            ))
          )}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6">مصروف جديد</h3>
            <div className="space-y-4">
              <select
                value={newExpense.cashboxId}
                onChange={(e) => setNewExpense({ ...newExpense, cashboxId: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              >
                {cashboxes.map((cb) => (
                  <option key={cb.id} value={cb.id}>{cb.name}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="المبلغ"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="text"
                placeholder="الوصف"
                value={newExpense.description}
                onChange={(e) => setNewExpense({ ...newExpense, description: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={addExpense}
                className="flex-1 px-6 py-3 bg-pink-600 text-white rounded-2xl font-black hover:bg-pink-700"
              >
                حفظ
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 rounded-2xl font-black hover:bg-slate-200"
              >
                إلغاء
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Expenses;
