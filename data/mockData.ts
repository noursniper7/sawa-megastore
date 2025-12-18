import { Product, Order, Transaction, Cashbox, OrderStatus, TransactionType } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'منتج تجريبي 1',
    sku: 'PROD-001',
    price: 250,
    stock: 50,
    category: 'إلكترونيات',
    supplierId: '1',
    imageUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '2',
    name: 'منتج تجريبي 2',
    sku: 'PROD-002',
    price: 150,
    stock: 30,
    category: 'ملابس',
    supplierId: '1',
    imageUrl: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: '3',
    name: 'منتج تجريبي 3',
    sku: 'PROD-003',
    price: 500,
    stock: 8,
    category: 'أجهزة',
    supplierId: '2',
    imageUrl: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export const mockOrders: Order[] = [
  {
    id: '1',
    customerName: 'أحمد محمد',
    customerPhone: '01012345678',
    customerAddress: 'القاهرة، مصر',
    governorate: 'القاهرة',
    shippingFee: 50,
    date: new Date().toISOString(),
    total: 300,
    status: OrderStatus.Created,
    items: [{ productId: '1', quantity: 1 }],
  },
  {
    id: '2',
    customerName: 'فاطمة علي',
    customerPhone: '01098765432',
    customerAddress: 'الإسكندرية، مصر',
    governorate: 'الإسكندرية',
    shippingFee: 50,
    date: new Date().toISOString(),
    total: 200,
    status: OrderStatus.Preparing,
    items: [{ productId: '2', quantity: 1 }],
  },
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: new Date().toISOString(),
    type: TransactionType.Deposit,
    amount: 5000,
    description: 'رأس المال الأولي',
    cashboxId: '1',
  },
  {
    id: '2',
    date: new Date().toISOString(),
    type: TransactionType.Withdrawal,
    amount: 500,
    description: 'مصاريف إدارية',
    cashboxId: '1',
  },
];

export const mockCashboxes: Cashbox[] = [
  {
    id: '1',
    name: 'الخزنة الرئيسية',
    balance: 4500,
  },
  {
    id: '2',
    name: 'خزنة المتجر',
    balance: 1000,
  },
  {
    id: '3',
    name: 'خزنة أونلاين',
    balance: 2500,
  },
];
