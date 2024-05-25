import React from "react";
import { useContext } from "react";
import { CartContext } from "../Panier/CartProvider";

const SummaryPage = () => {
  
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const { cartItems } = useContext(CartContext);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Paiement réussi
        </h2>
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Votre commande a été passée avec succès. Vous recevrez bientôt un
          email de confirmation.
        </p>
        <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl lg:max-w-full mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
            <div className="data">
              <p className="font-semibold text-base leading-7 text-black">
                Numéro de commande:{" "}
                <span className="text-indigo-600 font-medium">#10234987</span>
              </p>
              <p className="font-semibold text-base leading-7 text-black mt-4">
                Commande payée le:{" "}
                <span className="text-gray-400 font-medium">
                  {day}/{month}/{year}
                </span>
              </p>
            </div>
          </div>
          <div className="w-full px-3 sm:px-6">
            <h3 className="font-semibold text-lg text-black py-6">
              Votre commande
            </h3>
            {cartItems.map((item) => (
              <OrderItem
                key={item.id}
                imgSrc={item.image}
                altText={item.name}
                title={item.name}
                qty={item.quantite}
                price={item.priceReduction * item.quantite}
                status="En attente"
                deliveryTime={`${day + 2}/${month}/${year}`}
              />
            ))}
          </div>
          <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between">
            <div className="flex flex-col sm:flex-row items-center border-b border-gray-200 lg:border-0">
              <p className="font-medium text-lg text-gray-900 pl-6 py-3 lg:text-center">
                Payer avec la carte qui se termine par{" "}
                <span className="text-gray-500">1592</span>
              </p>
            </div>
            <p className="font-semibold text-lg text-black py-6">
              Prix Total: <span className="text-indigo-600">
                {cartItems.reduce(
                    (total, item) => total + item.priceReduction * item.quantite,
                    0
                    ) + 30} DH
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OrderItem = ({
  imgSrc,
  altText,
  title,
  by,
  size,
  qty,
  price,
  status,
  deliveryTime,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
      <div className="img-box w-full lg:max-w-[140px]">
        <img src={imgSrc} alt={altText} className="aspect-square w-full" />
      </div>
      <div className="flex flex-row items-center w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
          <div className="flex items-center">
            <div>
              <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                {title}
              </h2>
              <div className="flex items-center">
                <p className="font-medium text-base leading-7 text-black">
                  Qte: <span className="text-gray-500">{qty}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 w-full">
            <div className="col-span-5 lg:col-span-1 flex items-center mt-3 lg:mt-0">
              <div className="flex gap-3 lg:block">
                <p className="font-medium text-sm leading-7 text-black">
                  Prix
                </p>
                <p className="lg:mt-4 font-medium text-sm leading-7 text-indigo-600">
                  {price} DH
                </p>
              </div>
            </div>
            <div className="col-span-5 lg:col-span-2 flex items-center mt-3 lg:mt-0">
              <div className="flex gap-3 lg:block">
                <p className="font-medium text-sm leading-7 text-black">
                  Status
                </p>
                <p className="font-medium text-sm leading-6 py-0.5 px-3 rounded-full lg:mt-3 bg-emerald-50 text-emerald-600">
                  {status}
                </p>
              </div>
            </div>
            <div className="col-span-5 lg:col-span-2 flex items-center mt-3 lg:mt-0">
              <div className="flex gap-3 lg:block">
                <p className="font-medium text-sm leading-6 text-black">
                  Date de livraison estimée
                </p>
                <p className="font-medium text-base leading-7 lg:mt-3 text-emerald-500">
                  {deliveryTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
