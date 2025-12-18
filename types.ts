
import React from 'react';

export enum OrderStatus {
  Created = 'تم الإنشاء',
  Preparing = 'قيد التحضير',
  Shipped = 'تم الشحن',
  InTransit = 'في الطريق',
  Delivered = 'تم التسليم',
  Cancelled = 'ملغي',
  Returned = 'مرتجع',
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  address?: string;
  governorate?: string;
  createdAt: string;
}

export interface Order {
  id: string;
  customerId?: string; // Link to customer ID
  customerName: string;
  customerPhone?: string;
  customerAddress?: string;
  governorate?: string;
  shippingFee?: number;
  date: string;
  total: number;
  discount?: number;
  deposit?: number;
  depositCashboxId?: string;
  status: OrderStatus;
  items: { productId: string; quantity: number; note?: string }[];
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  stock: number;
  category: string;
  supplierId: string;
  imageUrl: string;
  isFragile?: boolean;
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
}

export interface KpiCardData {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: React.ReactElement;
}

export interface SalesData {
  name: string;
  sales: number;
}

export enum TransactionType {
  Deposit = 'إيداع',
  Withdrawal = 'سحب',
  Transfer = 'تحويل',
}

export interface Transaction {
  id: string;
  date: string;
  type: TransactionType;
  amount: number;
  description: string;
  cashboxId: string;
}

export interface Cashbox {
  id: string;
  name: string;
  balance: number;
}

export enum UserRole {
    Admin = 'مدير',
    Accountant = 'محاسب',
    Sales = 'موظف مبيعات',
    InventoryManager = 'مسؤول مخزون',
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    username?: string;
    password?: string;
}

export interface Partner {
    id: string;
    name: string;
    contribution: number; // Capital amount contributed
}
