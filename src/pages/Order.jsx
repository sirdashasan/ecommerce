import React, { useState, useEffect } from "react";
import OrderSummary from "../components/BasketComponents/OrderSummary";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";

import OrderForm from "../components/OrderComponents/OrderForm";
import {
  addAddress,
  deleteAddress,
  fetchAddresses,
  updateAddress,
} from "../store/actions/adressActions";

Modal.setAppElement("#root");

const Order = () => {
  const [activeTab, setActiveTab] = useState("address");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null); // Seçili adresi tutan state
  const [formData, setFormData] = useState({
    id: null,
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  const dispatch = useDispatch();
  const addresses = useSelector((state) => state.address.addresses);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      dispatch(updateAddress(formData));
    } else {
      dispatch(addAddress(formData));
    }
    setModalIsOpen(false);
  };

  const handleDelete = (addressId) => {
    dispatch(deleteAddress(addressId));
  };

  const openEditModal = (address) => {
    setFormData(address);
    setIsEditing(true);
    setModalIsOpen(true);
  };

  const handleSelectAddress = (addressId) => {
    setSelectedAddressId(addressId); // Seçili adresi güncelle
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-between md:mx-16">
      <div className=" p-4">
        <div className="border-b mb-4">
          <button
            className={`p-2 ${
              activeTab === "address" ? "border-b-2 border-[#23A6F0]" : ""
            }`}
            onClick={() => setActiveTab("address")}
          >
            Adres Bilgileri
          </button>
          <button
            className={`p-2 ml-4 ${
              activeTab === "payment" ? "border-b-2 border-[#23A6F0]" : ""
            }`}
            onClick={() => setActiveTab("payment")}
          >
            Ödeme Seçenekleri
          </button>
        </div>
        {activeTab === "address" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Teslimat Adresi</h2>
            <div className="mb-4">
              {addresses.map((address) => (
                <div key={address.id} className="relative"></div>
              ))}
            </div>
            <div className="md:flex md:flex-col md:gap-5">
              <button
                className="bg-gray-100 text-gray-700 py-8 px-64 rounded-lg font-semibold text-sm w-64"
                onClick={() => {
                  setFormData({
                    id: null,
                    title: "",
                    name: "",
                    surname: "",
                    phone: "",
                    city: "",
                    district: "",
                    neighborhood: "",
                    address: "",
                  });
                  setIsEditing(false);
                  setModalIsOpen(true);
                }}
              >
                + Yeni Adres Ekle
              </button>
              {addresses.map((address) => (
                <button
                  key={address.id}
                  className={`bg-gray-100 text-gray-700 py-16 px-64 rounded-lg font-semibold text-sm w-64 relative ${
                    selectedAddressId === address.id
                      ? "border-2 border-[#23A6F0]"
                      : ""
                  }`}
                  onClick={() => handleSelectAddress(address.id)}
                >
                  <div className="absolute top-4 left-0 text-left pl-8">
                    {selectedAddressId === address.id && (
                      <div className="absolute top-1 left-2 h-4 w-4 bg-[#23A6F0] rounded-full border-4 border-gray"></div>
                    )}
                    <p className="font-semibold">{address.title}</p>
                    <p className="text-left mt-4">
                      {address.name} {address.surname}
                    </p>
                    <p className="text-left">{address.address}</p>
                    <p className="text-left">{address.phone}</p>
                  </div>
                  <button
                    className="absolute top-0 right-0 text-red-500 md:px-4 md:pt-4"
                    onClick={() => handleDelete(address.id)}
                  >
                    Sil
                  </button>
                  <button
                    className="absolute top-0 right-0 text-blue-500 md:px-4 md:pt-4 md:mr-8"
                    onClick={() => openEditModal(address)}
                  >
                    Düzenle
                  </button>
                </button>
              ))}
            </div>
          </div>
        )}
        {activeTab === "payment" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Kart ile Öde</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Kart Numarası
              </label>
              <input
                type="text"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="flex mb-4">
              <div className="mr-4">
                <label className="block text-sm font-medium text-gray-700">
                  Son Kullanma Tarihi
                </label>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Ay"
                    className="mt-1 block w-16 p-2 border border-gray-300 rounded-md"
                  />
                  <input
                    type="text"
                    placeholder="Yıl"
                    className="mt-1 block w-16 p-2 border border-gray-300 rounded-md ml-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  CVV
                </label>
                <input
                  type="text"
                  className="mt-1 block w-16 p-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
            <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-semibold text-sm">
              Ödeme Yap
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <OrderSummary />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Adres Ekle"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <OrderForm
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          closeModal={() => setModalIsOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default Order;
