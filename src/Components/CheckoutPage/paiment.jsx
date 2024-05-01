import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

// Importez votre navbar ici
import Navbar from '../NavBar/navbar';

export default function Example() {
  return (
    <div>
        <Navbar />
    
    <div className="flex justify-center">
      
      <form className="max-w-4xl w-full">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Card Information</h2>
            <div className="flex gap-x-4 items-center">
              <input type="radio" id="credit-card" name="payment-method" value="credit-card" />
              <label htmlFor="credit-card">Credit Card</label>
              <input type="radio" id="paypal" name="payment-method" value="paypal" />
              <label htmlFor="paypal">PayPal</label>
              <input type="radio" id="etransfer" name="payment-method" value="etransfer" />
              <label htmlFor="etransfer">eTransfer</label>
            </div>
            <p className="mt-1 text-sm leading-6 text-gray-600">Please select a payment method.</p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name-on-card" className="block text-sm font-medium leading-6 text-gray-900">
                  Name on card
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name-on-card"
                    id="name-on-card"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="card-number" className="block text-sm font-medium leading-6 text-gray-900">
                  Card number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="card-number"
                    id="card-number"
                    autoComplete="cc-number"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="expiration-date" className="block text-sm font-medium leading-6 text-gray-900">
                  Expiration date
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="expiration-date"
                    id="expiration-date"
                    autoComplete="cc-exp"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="cvv" className="block text-sm font-medium leading-6 text-gray-900">
                  CVV
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="cvv"
                    id="cvv"
                    autoComplete="cc-csc"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
