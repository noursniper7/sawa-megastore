import React, { useState } from 'react';
import { Product } from '../types';

interface ProductsProps {
  products: Product[];
  onUpdateProducts: (products: Product[]) => void;
}

const Products: React.FC<ProductsProps> = ({ products, onUpdateProducts }) => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    sku: '',
    price: 0,
    stock: 0,
    category: '',
    supplierId: '1',
    imageUrl: '',
  });

  const addProduct = () => {
    const product: Product = {
      id: Date.now().toString(),
      ...newProduct,
    };
    onUpdateProducts([...products, product]);
    setShowAddModal(false);
    setNewProduct({ name: '', sku: '', price: 0, stock: 0, category: '', supplierId: '1', imageUrl: '' });
  };

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-black text-slate-800">المنتجات</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-pink-600 text-white rounded-2xl font-black text-sm shadow-lg shadow-pink-100 hover:bg-pink-700 transition-all"
        >
          إضافة منتج جديد
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
            {product.imageUrl && (
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-xl mb-4" />
            )}
            <h3 className="font-black text-slate-800 text-lg">{product.name}</h3>
            <p className="text-sm text-slate-500 font-bold mt-1">{product.sku}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-black text-pink-600">{product.price} ج.م</span>
              <span className="text-sm font-bold text-slate-500">المخزون: {product.stock}</span>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[2rem] p-8 max-w-2xl w-full">
            <h3 className="text-2xl font-black text-slate-800 mb-6">منتج جديد</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="اسم المنتج"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="text"
                placeholder="كود المنتج"
                value={newProduct.sku}
                onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="number"
                placeholder="السعر"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="number"
                placeholder="الكمية"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: parseInt(e.target.value) })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="text"
                placeholder="الفئة"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
              <input
                type="text"
                placeholder="رابط الصورة"
                value={newProduct.imageUrl}
                onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl font-bold"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <button
                onClick={addProduct}
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

export default Products;
