import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react';
import userIcon from './Assets/icons8-utilisateur-sexe-neutre-64.png';
import searchIcon from './Assets/icons8-chercher-50.png'
import panierIcon from './Assets/icons8-panier-64.png'
const products = [
  { name: 'Product 1', href: '#' },
  { name: 'Product 2', href: '#' },
  { name: 'Product 3', href: '#' },
  { name: 'Product 4', href: '#' },
];
const navigation = [
  { name: 'Home', href: './Components/Welcome/Welcome', current: false },
  { name: 'Product', href: './Components/ProductDisplay/ProductPage', current: false },
  { name: 'New arrivals', href: './Components/SignupPage/sign', current: false },
  { name: 'Our company', href: './Components/SignupPage/sign', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-green-200">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Logo */}
              <div>
                <img
                  className="h-8 w-auto"
                  src="/logo192.png"
                  alt="Your Company"
                />
              </div>
              {/* Navigation links */}
              <div className="hidden sm:flex sm:flex-1 sm:justify-center">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-green-200 text-black' : 'text-black hover:bg-green-200 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* Icons and profile dropdown */}
              <div className="flex items-center space-x-4">
                <a href="./Components/Welcome/Welcome">
                  <button
                    type="button"
                    className="relative rounded-full bg-green-200 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-200"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View search</span>
                    <img
                      className="h-6 w-6 rounded-full"
                      src={panierIcon}
                      alt=""
                    />
                  </button>
                </a>
                <a href="./Components/Welcome/Welcome">
                  <button
                    type="button"
                    className="relative rounded-full bg-green-200 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-200"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View search</span>
                    <img
                      className="h-6 w-6 rounded-full"
                      src={searchIcon}
                      alt=""
                    />
                  </button>
                </a>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-green-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-200">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={userIcon}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="./Components/SignupPage/sign"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign In
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="./Components/SignupPage/sign"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign Up 
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="./Components/SignupPage/sign"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
            {/* Mobile menu */}
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}
