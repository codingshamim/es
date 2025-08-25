// components/OrderTable.jsx

// components/OrderTracking.jsx

export  function OrderTracking() {
  return (
    <div className="space-y-8">
      {/* Order Search */}
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
          Track Your Order
        </h1>
        <div className="flex space-x-2">
          <input 
            type="text" 
            placeholder="Enter your order ID" 
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
            Track
          </button>
        </div>
      </div>

      {/* Order Details */}
      <OrderDetails />
    </div>
  );
}
// components/OrderDetails.jsx
export default function OrderDetails() {
  const progressSteps = [
    {
      title: 'Order Confirmed',
      completed: true,
      timestamp: 'Aug 15, 2:30 PM',
      icon: '✓'
    },
    {
      title: 'Processing Started',
      completed: true,
      timestamp: 'Aug 15, 4:45 PM',
      icon: '✓'
    },
    {
      title: 'Shipped',
      subtitle: 'Out for Delivery',
      completed: false,
      timestamp: 'Pending',
      icon: '3'
    },
    {
      title: 'Delivered',
      completed: false,
      timestamp: 'Pending',
      icon: '4'
    }
  ];

  const orderItems = [
    {
      name: 'Wireless Bluetooth Headphones',
      details: 'Color: Black, Model: WH-1000XM4',
      quantity: 1,
      price: '$199.99'
    },
    {
      name: 'Wireless Charging Pad',
      details: 'Color: White, Power: 15W',
      quantity: 1,
      price: '$49.99'
    },
    {
      name: 'USB-C Cable',
      details: 'Length: 2m, Type: Fast Charging',
      quantity: 2,
      price: '$25.00'
    }
  ];

  return (
    <div className="space-y-8">
      {/* Order Header */}
      <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-white">Order #ESV-2024-001</h2>
            <p className="text-gray-400">Placed on August 15, 2024 at 2:30 PM</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-400">$299.99</div>
            <div className="text-sm text-gray-400">Total Amount</div>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="relative mb-8">
          <div className="flex justify-between items-center relative z-10">
            {progressSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${
                  step.completed 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white transform scale-110' 
                    : 'bg-gray-700 text-white'
                }`}>
                  {step.icon}
                </div>
                <div className="text-sm font-medium text-center text-white">
                  <div>{step.title}</div>
                  {step.subtitle && <div>{step.subtitle}</div>}
                </div>
                <div className="text-xs text-gray-500 text-center mt-1">{step.timestamp}</div>
              </div>
            ))}
          </div>
          <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-700">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-full w-1/2"></div>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div>
              <div className="font-medium text-white">Currently Processing</div>
              <div className="text-sm text-gray-400">
                Your order is being prepared for shipment. Estimated ship date: August 17, 2024
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
        <h3 className="text-xl font-bold mb-4 text-white">Order Items</h3>
        <div className="space-y-4">
          {orderItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 bg-gray-900/30 rounded-lg">
              <div className="w-16 h-16 bg-gray-700 rounded-lg"></div>
              <div className="flex-1">
                <div className="font-medium text-white">{item.name}</div>
                <div className="text-sm text-gray-400">{item.details}</div>
                <div className="text-sm text-gray-400">Quantity: {item.quantity}</div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Subtotal:</span>
              <span className="text-white">$274.98</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Shipping:</span>
              <span className="text-white">$15.00</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Tax:</span>
              <span className="text-white">$10.01</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-t border-gray-700 pt-2">
              <span className="text-white">Total:</span>
              <span className="text-purple-400">$299.99</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping and Payment Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <ShippingAddress />
        <PaymentMethod />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors">
          Contact Support
        </button>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all">
          Download Invoice
        </button>
      </div>
    </div>
  );
}

// components/ShippingAddress.jsx
export function ShippingAddress() {
  return (
    <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-white">Shipping Address</h3>
      <div className="text-gray-300">
        <div className="font-medium">Md Shamim Khan</div>
        <div>123 Tech Street</div>
        <div>Tungi, Dhaka Division</div>
        <div>Bangladesh 1705</div>
        <div className="mt-2">Phone: 01816428414</div>
      </div>
    </div>
  );
}

// components/PaymentMethod.jsx
export function PaymentMethod() {
  return (
    <div className="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300">
      <h3 className="text-xl font-bold mb-4 text-white">Payment Method</h3>
      <div className="text-gray-300">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-8 h-6 bg-blue-600 rounded"></div>
          <span>•••• •••• •••• 1234</span>
        </div>
        <div className="text-sm text-gray-400">Visa ending in 1234</div>
        <div className="text-sm text-green-400 mt-2">✓ Payment Confirmed</div>
      </div>
    </div>
  );
}

// components/ProgressTracker.jsx
export function ProgressTracker({ steps, currentStep }) {
  return (
    <div className="relative mb-8">
      <div className="flex justify-between items-center relative z-10">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 transition-all duration-300 ${
              index <= currentStep 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white transform scale-110' 
                : 'bg-gray-700 text-white'
            }`}>
              {index <= currentStep ? '✓' : index + 1}
            </div>
            <div className="text-sm font-medium text-center text-white">
              <div>{step.title}</div>
              {step.subtitle && <div>{step.subtitle}</div>}
            </div>
            <div className="text-xs text-gray-500 text-center mt-1">{step.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-700">
        <div 
          className="bg-gradient-to-r from-purple-600 to-blue-600 h-full transition-all duration-500" 
          style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

// Usage Example in pages/orders.js or pages/track-order.js
/*
import OrderTable from '../components/OrderTable'
import OrderTracking from '../components/OrderTracking'

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-6">
        <OrderTable />
      </div>
    </div>
  )
}

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto p-6">
        <OrderTracking />
      </div>
    </div>
  )
}
*/