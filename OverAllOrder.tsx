import React from "react";

export const OverAllOrder = () => {
  const dashBoard = () => {
    return (
      <div className="p-2   w-max  bg-slate-300">
        <div className="bg-white p-5 rounded-xl ml-5 ">
          <h1 className="text-3xl font-bold">Overall Orders</h1>
          <div className="grid grid-cols-4   ">
            <div className="">
              <h1 className="text-sky-500 mt-4 text-2xl font-bold">
                Total Orders
              </h1>
              <h1 className="text-gray-500 text-2xl mt-2 font-bold">37</h1>
              <h1 className="text-gray-400  text-2xl mt-2">Last 7 days</h1>
            </div>
            
            <div>
              <h1 className="text-amber-600 text-2xl font-bold mt-4">
                Total Received
              </h1>
              <div className="grid grid-cols-2 ">
                <h1 className="text-gray-500 text-2xl mt-2 font-bold">32</h1>
                <h1 className="text-gray-500 text-2xl mt-2  font-bold">
                  ₹25000
                </h1>
                <h1 className="text-gray-400  text-2xl mt-2">Last 7 days</h1>
                <h1 className="text-gray-400  text-2xl mt-2 ">Revenue</h1>
              </div>
            </div>

            <div>
              <h1 className="text-purple-700 text-2xl mt-4 font-bold">
                Total Out
              </h1>
              <div className="grid grid-cols-2">
                <h1 className="text-gray-500 text-2xl mt-2 font-bold">5</h1>
                <h1 className="text-gray-500 text-2xl mt-2 font-bold ">
                  ₹2500
                </h1>
                <h1 className="text-gray-400  text-2xl mt-2">Last 7 days</h1>
                <h1 className="text-gray-400  text-2xl mt-2 ">Cost</h1>
              </div>
            </div>
            <div>
              <h1 className="text-red-700  text-2xl mt-4 font-bold ">
                In Process
              </h1>
              <div className="grid grid-cols-2 ">
                <h1 className="text-gray-500 text-2xl mt-2 font-bold">12</h1>
                <h1 className="text-gray-500 text-2xl mt-2  font-bold">
                  ₹2356
                </h1>
                <h1 className="text-gray-400  text-2xl mt-2">Ordered</h1>
                <h1 className="text-gray-400  text-2xl mt-2 ">Cost</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="p-5 ml-5 mt-2 rounded-xl bg-white">
          <div className=" flex justify-between">
            <div className="text-3xl font-bold">Orders</div>
            <div className=" ">
              <button className="bg-blue-500  text-white text-lg px-2 py-1 rounded-md">
                Add Product
              </button>

              <button className="border-2 font-bold text-lg text-gray-400 px-4 py-2 rounded-md ml-5">
                Filters
              </button>

              <button className="border-2 font-bold text-gray-400 text-lg px-4 py-2 rounded-md ml-5">
                Order History
              </button>
            </div>
          </div>
          <div className="w-max mt-5">
  {/* Table Header */}
  <div className="grid grid-cols-6 gap-x-36 py- border-b-2 border-gray-300">
    <div className="text-xl font-bold text-gray-400">User Name</div>
    <div className="text-xl font-bold text-gray-400">Order Value</div>
    <div className="text-xl font-bold text-gray-400">Days</div>
    <div className="text-xl font-bold text-gray-400">Order ID</div>
    <div className="text-xl font-bold text-gray-400">Expected Date</div>
    <div className="text-xl font-bold text-gray-400">Status</div>
  </div>

  {/* Table Rows */}
  {[
    ["Maggi", "₹4306", "43 Days", "7535", "11/12/22", "Delayed", "text-amber-500"],
    ["Bru", "₹2557", "22 Days", "5724", "21/12/22", "Confirmed", "text-cyan-500"],
    ["Red Bull", "₹4075", "36 Days", "2775", "5/12/22", "Expired", "text-gray-600"],
    ["Bourn Vita", "₹5052", "14 Days", "2275", "8/12/22", "In Process", "text-green-500"],
    ["Horlicks", "₹5370", "5 Days", "2427", "9/1/23", "Expired", "text-gray-600"],
    ["Harpic", "₹6065", "10 Days", "2578", "9/1/23", "In Process", "text-green-500"],
    ["Ariel", "₹4078", "23 Days", "2757", "15/12/23", "Delayed", "text-amber-500"],
    ["Scotch Brite", "₹3559", "43 Days", "3757", "6/6/23", "Confirmed", "text-cyan-500"],
    ["Coca Cola", "₹2055", "41 Days", "2474", "11/11/22", "Delayed", "text-amber-500"],
  ].map(([name, value, days, id, date, status, color], index) => (
    <div
      key={index}
      className="grid grid-cols-6 gap-x-36 py-2 border-b border-gray-300"
    >
      <div className="text-xl font-bold text-gray-600">{name}</div>
      <div className="text-xl font-bold text-gray-600">{value}</div>
      <div className="text-xl font-bold text-gray-600">{days}</div>
      <div className="text-xl font-bold text-gray-600">{id}</div>
      <div className="text-xl font-bold text-gray-600">{date}</div>
      <div className={`text-xl font-bold ${color}`}>{status}</div>
    </div>
  ))}
</div>

          <div className="flex justify-between mt-5">
            <button className="border-2 text-slate-500 font-bold px-3 p-2 py-2 text-lg rounded-md ">
              Previous
            </button>

            <div className="text-lg  text-slate-500 ">Page 1 of 10</div>

            <button className="border-2 text-slate-500 font-bold px-8 p-3  text-lg rounded-md ">
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
  return <div>{dashBoard()}</div>;
};
