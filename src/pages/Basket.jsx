import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemCount,
  increaseItemCount,
  removeFromCart,
  toggleItemChecked,
} from "../store/actions/shoppingCartActions";

const Basket = () => {
  const cart = useSelector((state) => state.shoppingCart.cart);
  const dispatch = useDispatch();

  const handleIncrease = (productId) => {
    dispatch(increaseItemCount(productId));
  };

  const handleDecrease = (productId) => {
    dispatch(decreaseItemCount(productId));
  };

  const handleRemove = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleToggleChecked = (productId) => {
    dispatch(toggleItemChecked(productId));
  };

  const totalPrice = cart
    .filter((item) => item.checked)
    .reduce((total, item) => total + item.product.price * item.count, 0);

  return (
    <div className="md:mx-36 mt-10 flex flex-col md:flex-row md:justify-between md:gap-8">
      <div className="w-full lg:w-2/3">
        <h1 className="text-3xl font-semibold mb-6">
          Sepetim ({cart.length} Ürün)
        </h1>
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-row items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex flex-row items-center gap-4 w-1/2">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleToggleChecked(item.product.id)}
                />
                <img
                  src={item.product.images[0].url}
                  alt={item.product.name}
                  className="w-20 h-20 object-contain"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{item.product.name}</p>
                  <p className="text-sm text-gray-600">Adet: {item.count}</p>
                  <p className="text-sm text-gray-600">
                    Fiyat: ${item.product.price}
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <button
                  className="bg-gray-200 px-3 py-1 rounded"
                  onClick={() => handleDecrease(item.product.id)}
                >
                  -
                </button>
                <span>{item.count}</span>
                <button
                  className="bg-gray-200 px-3 py-1 rounded"
                  onClick={() => handleIncrease(item.product.id)}
                >
                  +
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleRemove(item.product.id)}
                >
                  Sil
                </button>
              </div>
              <div className="font-semibold text-lg">
                ${item.product.price * item.count}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-4 border rounded-lg shadow-lg mt-6 lg:mt-0 md:h-72">
        <h2 className="text-2xl font-semibold mb-4">Sipariş Özeti</h2>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Ürünün Toplamı</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Kargo Toplam</span>
            <span>$29.99</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>150 ve Üzeri Kargo Bedava</span>
            <span>-$29.99</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Toplam</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <button className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg font-semibold text-sm">
          + İNDİRİM KODU GİR
        </button>
        <button className="w-full mt-2 bg-[#23A6F0] text-white py-2 rounded-lg font-semibold text-xl">
          Sepeti Onayla
        </button>
      </div>
    </div>
  );
};

export default Basket;
