import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl">
      <span className="dark:text-white font-semibold text-3xl">Select Item</span>
          <div className="flex justify-between my-2">
          <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
          <span className="font-semibold dark:text-white">$170</span>
        </div>
      <div className="flex justify-between my-2">
        <span className="text-gray-500 dark:text-gray-100">Bed</span>
        <span className="font-semibold dark:text-white">$800</span>
      </div>
      <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
        <span className="dark:text-white">Total</span>
        <span className="dark:text-white font-semibold">$970</span>
      </div>
    <button
      className="dark:bg-black dark:border-white dark:border mt-5 bg-blue-500 text-white  p-4
      flex flex-col items-center rounded-xl w-3/4 mx-auto
      dark:hover:bg-white hover:bg-teal-500 hover:text-black
      active:bg-yellow-500 focus:text-indigo-600">
      Checkout
    </button>
        </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-xl group">
      <div className="portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-52">
        <span className="text-white text-2xl">Profile</span>
      </div>
      <div className="bg-white p-6 rounded-3xl relative -top-5">
        <div className="flex relative -top-16 items-end justify-between"> 
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Orders</span>
            <span className="font-semibold">340</span>
          </div>
          <div className="h-24 w-24 bg-gray-400 rounded-full group-hover:bg-red-300" />
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500">Spent</span>
            <span className="font-semibold">$2,310</span>
          </div>
          </div>
          <div className="relative flex flex-col -mt-10 -mb-5 items-center">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">New York, USA</span>
          </div>
         </div>
        </div>
      <div className="bg-white p-6 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
      <div className="flex mb-5 justify-between items-center">
        <span>⬅️</span>
        <div className="space-x-3">
          <span>⭐ 4.9</span>
          <span className="shadow-lg p-2 rounded-md">❤️</span>
        </div>
      </div>
      <div className="bg-sky-300 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-semibold text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-2 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-blue-200 text-center aspect-square w-8 text-2xl text-gray-500 rounded-xl">-</button>
              <span>1</span>
              <button className="bg-blue-200 text-center aspect-square w-8 text-2xl text-gray-500 rounded-xl">+</button>  
            </div>  
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-sm text-center text-white rounded-lg">Add to cart</button>
          </div>  
        </div>
        </div>
    </div>
  );
};

export default Home;