import React, { useState } from 'react';
import { Transaction, Cashbox as CashboxType, TransactionType } from '../types';

interface CashboxProps {
  transactions: Transaction[];
  cashboxes: CashboxType[];
  onUpdateTransactions: (transactions: Transaction[]) => void;
  onUpdateCashboxes: (cashboxes: CashboxType[]) => void;
}

const Cashbox: React.FC<CashboxProps> = ({ transactions, cashboxes, onUpdateTransactions, onUpdateCashboxes }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    type: TransactionType.Deposit,
    amount: 0,
    description: '',
    cashboxId: cashboxes[0]?.id || '1',
  });

  const addTransaction = () => {
    const transaction: Transaction = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      ...newTransaction,
    };

    const updatedCashboxes = cashboxes.map(cb => {
      if (cb.id === newTransaction.cashboxId) {
        const balanceChange = newTransaction.type === TransactionType.Deposit ? newTransaction.amount : -newTransaction.amount;
        return { ...cb, balance: cb.balance + balanceChange };
      }
      return cb;
    });

    onUpdateTransactions([...transactions, transaction]);
    onUpdateCashboxes(updatedCashboxes);
    setShowAddModal(false);
    setNewTransaction({ type: TransactionType.Deposit, amount: 0, description: '', cashboxId: cashboxes[0]?.id || '1' });
  };

  const totalBalance = cashboxes.reduce((sum, cb) => sum + cb.balance, 0);

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-800">الخزنة</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-pink-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-pink-100 hover:bg-pink-700 transition-all"
        >
          إضافة معاملة
        </button>
      </div>

      <div className="bg-gradient-to-br from-pink-600 to-rose-700 p-8 rounded-[2.5rem] text-white shadow-xl shadow-pink-100">
        <p className="text-[10px] font-black opacity-60 uppercase tracking-widest mb-2">الرصيد الإجمالي</p>
        <p className="text-5xl font-black">{totalBalance.toFixed(2)} ج.م</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cashboxes.map((cashbox) => (
          <div key={cashbox.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            <p className="text-sm font-bold text-slate-500 mb-2">{cashbox.name}</p>
            <p className="text-3xl font-black text-slate-800">{cashbox.balance.toFixed(2)} ج.م</p>
          </div>
        ))}
      </div>

      <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
        <h3 className="font-black text-lg text-slate-800 mb-6">آخر المعاملات</h3>
        <div className="space-y-4">
          {transactions.slice(-10).reverse().map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100">
              <div>
                <p className="font-black text-slate-800">{transaction.description}</p>
                <p className="text-xs text-slate-400 font-bold">{new Date(transaction.date).toLocaleDateString('ar-EG')}</p>
              </div>
              <div className="text-left">
                <p className={`font-black ${transaction.type === TransactionType.Deposit ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {transaction.type === TransactionType.Deposit ? '+' : '-'}{transaction.amount.toFixed(2)} ج.م
                </p>
                <span className="text-xs font-bold text-slate-500">{transaction.type}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6">معاملة جديدة</h3>
            <div className="space-y-4">
              <select
                value={newTransaction.type}
                onChange={(e) => setNewTransaction({ ...newTransaction, type: e.target.value as TransactionType })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              >
                <option value={TransactionType.Deposit}>إيداع</option>
                <option value={TransactionType.Withdrawal}>سحب</option>
              </select>
              <select
                value={newTransaction.cashboxId}
                onChange={(e) => setNewTransaction({ ...newTransaction, cashboxId: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              >
                {cashboxes.map((cb) => (
                  <option key={cb.id} value={cb.id}>{cb.name}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="المبلغ"
                value={newTransaction.amount}
                onChange={(e) => setNewTransaction({ ...newTransaction, amount: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="text"
                placeholder="الوصف"
                value={newTransaction.description}
                onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={addTransaction}
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

export default Cashbox;
