import React, { useState, useContext } from "react";
import { CartContext } from "../Panier/CartProvider";
import { useEffect } from "react";

const Checkout = () => {
  const { cartItems, user , clearCart } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [formData, setFormData] = useState({
    cardNumber: "",
    expDate: "",
    cvv: "",
    cardHolderName: "",
    postalCode: "",
  });
  const [deliveryData, setDeliveryData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
  });

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.id);
  };

  const handleFileChange = (e) => {
    setUploadedFile(e.target.files[0]);
    console.log(uploadedFile);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDeliveryInputChange = (event) => {
    const { name, value } = event.target;
    setDeliveryData({ ...deliveryData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (uploadedFile) {
      const fileData = new FormData();
      fileData.append("file", uploadedFile);

      fetch("http://localhost:8086/api/v1/s3/upload", {
        method: "POST",
        body: fileData,
      })
        .then((response) => response.text())
        .then((data) => {
          console.log("File upload successfull");
          const url = data;
          console.log(url);
          const commande = {
            client: user,
            produits: cartItems
              .map((item) => `${item.nom}: ${item.quantite}`)
              .join(","),
            montantTotal:
              cartItems.reduce(
                (acc, item) => acc + item.priceReduction * item.quantite,
                0
              ) + 30,
            status: "En cours de verification",
            date: new Date().toISOString().split('T')[0],
            addresse:
              deliveryData.address + " " +
              deliveryData.city + " " +
              deliveryData.postalCode,
            telephone: deliveryData.phoneNumber,
            type: "Commande Client",
            urlOrdonnance: url,
          };
          fetch("http://127.0.0.1:8086/api/v1/commande/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(commande),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Success:", data);
              window.location.href = "/orderSummary";
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        })
        .catch((error) => {
          console.error("File upload error:", error);
        });
    }

    const facture = {
      client: user,
      montantTotal:
        cartItems.reduce(
          (acc, item) => acc + item.priceReduction * item.quantite,
          0
        ) + 30,
      date: new Date().toISOString(),
      description: cartItems
        .map((item) => `${item.nom}: ${item.quantite}`)
        .join(","),
    };
    console.log(facture);
    fetch("http://127.0.0.1:8086/api/v1/facture/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(facture),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    
  };

  return (
    <div className="font-[sans-serif] bg-gray-50 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333] text-center">
          Checkout
        </h2>
        <div className="grid lg:grid-cols-3 gap-8 mt-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-[#333] mt-8">
              Informations de livraison
            </h3>
            <div className="grid gap-6 mt-4">
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  value={deliveryData.firstName}
                  onChange={handleDeliveryInputChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  value={deliveryData.lastName}
                  onChange={handleDeliveryInputChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={deliveryData.address}
                onChange={handleDeliveryInputChange}
                className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
              />
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={deliveryData.city}
                  onChange={handleDeliveryInputChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
                <input
                  type="number"
                  placeholder="Postal code"
                  name="postalCode"
                  value={deliveryData.postalCode}
                  onChange={handleDeliveryInputChange}
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                />
              </div>
              <input
                type="text"
                placeholder="Phone number"
                name="phoneNumber"
                value={deliveryData.phoneNumber}
                onChange={handleDeliveryInputChange}
                className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
              />
            </div>
            <div className="flex items-center mt-3">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="px-6 py-3.5 text-sm bg-gray-600 text-white rounded-md hover:bg-gray-700 cursor-pointer"
              >
                Upload File
              </label>
              {uploadedFile && (
                <span className="ml-4 text-sm text-green-600">
                  File uploaded: {uploadedFile.name}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-[#333] mt-6">
              Choisir le mode de paiement
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 mt-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="w-5 h-5 cursor-pointer"
                  id="card"
                  checked={paymentMethod === "card"}
                  onChange={handlePaymentChange}
                />
                <label
                  htmlFor="card"
                  className="ml-4 flex gap-2 cursor-pointer"
                >
                  <img
                    src="https://readymadeui.com/images/visa.webp"
                    className="w-12"
                    alt="card1"
                  />
                  <img
                    src="https://readymadeui.com/images/american-express.webp"
                    className="w-12"
                    alt="card2"
                  />
                  <img
                    src="https://readymadeui.com/images/master.webp"
                    className="w-12"
                    alt="card3"
                  />
                </label>
              </div>
            </div>
            <form className="mt-8" onSubmit={handleSubmit}>
              <div className="grid gap-6">
                <div className="grid sm:grid-cols-3 gap-6">
                  <input
                    type="number"
                    placeholder="Card number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="EXP."
                    name="expDate"
                    value={formData.expDate}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="CVV"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
                <div className="sm:col-span-2 grid sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Name of card holder"
                    name="cardHolderName"
                    value={formData.cardHolderName}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Postal code"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border rounded-md focus:border-[#007bff] outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mt-10">
                <button
                  type="submit"
                  className="px-6 py-3.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Payer par carte
                </button>
              </div>
            </form>
          </div>
          <div className="lg:border-l lg:pl-8">
            <h3 className="text-xl font-bold text-[#333] mb-6">Vos articles</h3>
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cartItems.map((product) => (
                  <li key={product.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={product.image}
                        alt={product.nom}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={product.href}>{product.nom}</a>
                          </h3>
                          <p className="ml-4">
                            {product.priceReduction * product.quantite} DH
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">
                          Qte : {product.quantite}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="text-[#333] mt-6 space-y-4">
              <li className="flex flex-wrap gap-4 text-sm">
                Tax{" "}
                <span className="ml-auto font-bold">
                  {cartItems.reduce(
                    (acc, item) =>
                      acc + item.priceReduction * item.quantite * 0.1,
                    0
                  )}{" "}
                  DH
                </span>
              </li>
              <li className="flex flex-wrap gap-4 text-sm">
                Livraison <span className="ml-auto font-bold">30 DH</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base font-bold border-t pt-4">
                Total{" "}
                <span className="ml-auto">
                  {cartItems.reduce(
                    (acc, item) => acc + item.priceReduction * item.quantite,
                    0
                  ) + 30}{" "}
                  DH
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
