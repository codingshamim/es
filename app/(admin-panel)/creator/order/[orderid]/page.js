export default function page() {
  return (
    <div id="order-view-page" className="page-content p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <button
            onclick="backToOrders()"
            className="flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <i className="fas fa-arrow-left mr-2" />
            Back to Orders
          </button>
          <div className="h-6 w-px bg-gray-600" />
          <div>
            <h1 className="text-3xl font-bold text-white">Order Details</h1>
            <p className="text-gray-400">Transaction ID: ES5309406638</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <i className="fas fa-print mr-2" />
            Print Invoice
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
            <i className="fas fa-edit mr-2" />
            Update Status
          </button>
        </div>
      </div>
      {/* Order Status Timeline */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 mb-8 border border-gray-600 shadow-2xl">
        <h3 className="text-xl font-semibold text-white mb-6">
          Order Timeline
        </h3>
        <div className="flex items-center justify-between relative">
          {/* Progress Line */}
          <div className="absolute top-6 left-8 right-8 h-0.5 bg-gray-600" />
          <div className="absolute top-6 left-8 w-1/4 h-0.5 bg-orange-500" />
          {/* Timeline Steps */}
          <div className="flex flex-col items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mb-2">
              <i className="fas fa-check text-white" />
            </div>
            <span className="text-sm text-white font-medium">Order Placed</span>
            <span className="text-xs text-gray-400">Aug 19, 7:46 PM</span>
          </div>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center mb-2 animate-pulse">
              <i className="fas fa-clock text-white" />
            </div>
            <span className="text-sm text-white font-medium">Processing</span>
            <span className="text-xs text-gray-400">Pending</span>
          </div>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mb-2">
              <i className="fas fa-truck text-gray-400" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Shipped</span>
            <span className="text-xs text-gray-500">Pending</span>
          </div>
          <div className="flex flex-col items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center mb-2">
              <i className="fas fa-home text-gray-400" />
            </div>
            <span className="text-sm text-gray-400 font-medium">Delivered</span>
            <span className="text-xs text-gray-500">Pending</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Order Items & Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Order Items */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <i className="fas fa-shopping-bag mr-3 text-blue-500" />
                Order Items
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {/* Item 1 */}
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-gray-700/30 border border-gray-600">
                  <img
                    src="https://i.ibb.co.com/DWyckD7/image.png"
                    alt="Product"
                    className="w-16 h-16 rounded-lg object-cover border-2 border-gray-600"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">
                      Premium Cotton T-Shirt
                    </h4>
                    <p className="text-gray-400 text-sm">Size: XL</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-400">Qty: 2</span>
                        <span className="text-blue-400 font-medium">
                          ৳308.25 each
                        </span>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-semibold">৳616.50</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shipping Address */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <i className="fas fa-map-marker-alt mr-3 text-green-500" />
                Shipping Address
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
                    MK
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-lg">
                      Md Shamim Khan
                    </h4>
                    <p className="text-gray-400 mt-1">
                      <i className="fas fa-phone mr-2" />
                      01900000000
                    </p>
                    <div className="mt-3 space-y-1">
                      <p className="text-gray-300">
                        <i className="fas fa-home mr-2 text-gray-400" />
                        hjsfhajksfhdjkashdfjkashjkdfhjkashfjkhasdf
                      </p>
                      <p className="text-gray-300">
                        <i className="fas fa-city mr-2 text-gray-400" />
                        Tungipara, Gopalganj - 8121
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Order Notes */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <i className="fas fa-sticky-note mr-3 text-yellow-500" />
                Order Notes
              </h3>
            </div>
            <div className="p-6">
              <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-600">
                <p className="text-gray-400 italic">
                  No special instructions for this order.
                </p>
              </div>
              <div className="mt-4">
                <textarea
                  placeholder="Add internal notes..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  rows={3}
                  defaultValue={""}
                />
                <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                  <i className="fas fa-save mr-2" />
                  Save Note
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column - Order Summary & Actions */}
        <div className="space-y-8">
          {/* Order Summary */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <i className="fas fa-receipt mr-3 text-purple-500" />
                Order Summary
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal:</span>
                  <span>৳616.50</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping (Inside Dhaka):</span>
                  <span>৳40.00</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Discount:</span>
                  <span className="text-green-400">-৳0.00</span>
                </div>
                <hr className="border-gray-600" />
                <div className="flex justify-between text-xl font-bold text-white">
                  <span>Total:</span>
                  <span>৳656.50</span>
                </div>
              </div>
            </div>
          </div>
          {/* Payment Information */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <i className="fas fa-credit-card mr-3 text-green-500" />
                Payment Info
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Method:</span>
                  <div className="flex items-center space-x-2">
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23e91e63'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/%3E%3C/svg%3E"
                      alt="Bkash"
                      className="w-5 h-5"
                    />
                    <span className="text-white font-medium">Bkash</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Status:</span>
                  <span className="px-3 py-1 text-xs font-semibold bg-yellow-600 text-white rounded-full">
                    Pending
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Transaction ID:</span>
                  <span className="text-white font-mono">ES5309406638</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Date:</span>
                  <span className="text-white">Aug 19, 2025 7:46 PM</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-600">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors mb-2">
                  <i className="fas fa-check mr-2" />
                  Mark as Paid
                </button>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors">
                  <i className="fas fa-times mr-2" />
                  Mark as Failed
                </button>
              </div>
            </div>
          </div>
          {/* Order Actions */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <i className="fas fa-cogs mr-3 text-blue-500" />
                Quick Actions
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <i className="fas fa-shipping-fast mr-2" />
                  Mark as Shipped
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <i className="fas fa-check-circle mr-2" />
                  Mark as Delivered
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <i className="fas fa-envelope mr-2" />
                  Send Email Update
                </button>
                <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <i className="fas fa-phone mr-2" />
                  Call Customer
                </button>
                <hr className="border-gray-600 my-4" />
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center">
                  <i className="fas fa-ban mr-2" />
                  Cancel Order
                </button>
              </div>
            </div>
          </div>
          {/* Customer Information */}
          <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl">
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <i className="fas fa-user mr-3 text-indigo-500" />
                Customer Info
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                  MK
                </div>
                <div>
                  <h4 className="text-white font-semibold">Md Shamim Khan</h4>
                  <p className="text-gray-400 text-sm">
                    Customer since Aug 2024
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-gray-400" />
                  <span className="text-gray-300">shamim@example.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-gray-400" />
                  <span className="text-gray-300">01900000000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-shopping-bag text-gray-400" />
                  <span className="text-gray-300">Total Orders: 5</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-dollar-sign text-gray-400" />
                  <span className="text-gray-300">Lifetime Value: ৳3,240</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-600">
                <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition-colors">
                  <i className="fas fa-user-edit mr-2" />
                  View Customer Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Status Update Modal (Hidden by default) */}
      <div
        id="status-modal"
        className="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center"
      >
        <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 max-w-md w-full mx-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">
              Update Order Status
            </h3>
            <button
              onclick="closeStatusModal()"
              className="text-gray-400 hover:text-white"
            >
              <i className="fas fa-times" />
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Order Status
              </label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pending</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
                <option>Cancelled</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Payment Status
              </label>
              <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Pending</option>
                <option>Paid</option>
                <option>Failed</option>
                <option>Refunded</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Notes (Optional)
              </label>
              <textarea
                placeholder="Add status update notes..."
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows={3}
                defaultValue={""}
              />
            </div>
          </div>
          <div className="flex space-x-3 mt-6">
            <button
              onclick="closeStatusModal()"
              className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
