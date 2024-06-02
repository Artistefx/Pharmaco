import React, { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import userIcon from "./Assets/icons8-utilisateur-sexe-neutre-64.png";
import searchIcon from "./Assets/icons8-chercher-50.png";
import panierIcon from "./Assets/icons8-panier-64.png";
import { CartContext } from "../Panier/CartProvider";
import logo from "../loginPage/LoginAssets/logo1.png";
import "./navbar.css";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Product", href: "/filtre", current: false },
  { name: "New arrivals", href: "/filtre", current: false },
  { name: "Our company", href: "/", current: false },
];

export default function Example({ toggleCart }) {
  const { isConnected, setUser, ToggleIsConnected } = useContext(CartContext);

  return (
    <Disclosure as="nav" className="navbar">
      {({ open }) => (
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={logo} alt="Your Company" />
          </div>

          <ul className="navbar-menu">
            {navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>

          <div className="navbar-icons">
            <button
              type="button"
              className="navbar-icon-btn"
              onClick={toggleCart}
            >
              <img className="navbar-icon" src={panierIcon} alt="Cart" />
            </button>
            <a href="/filtre">
              <button type="button" className="navbar-icon-btn">
                <img className="navbar-icon" src={searchIcon} alt="Search" />
              </button>
            </a>
            <Menu as="div" className="relative">
              <Menu.Button className="navbar-icon-btn">
                <img className="navbar-icon" src={userIcon} alt="User" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {!isConnected ? (
                    <>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={`block px-4 py-2 text-sm text-gray-700 ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            Sign In
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/signup"
                            className={`block px-4 py-2 text-sm text-gray-700 ${
                              active ? "bg-gray-100" : ""
                            }`}
                          >
                            Sign Up
                          </a>
                        )}
                      </Menu.Item>
                    </>
                  ) : (
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="/"
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? "bg-gray-100" : ""
                          }`}
                          onClick={() => {
                            sessionStorage.removeItem("user");
                            setUser(null);
                            ToggleIsConnected();
                          }}
                        >
                          Sign out
                        </a>
                      )}
                    </Menu.Item>
                  )}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
