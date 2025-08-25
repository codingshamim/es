export default function page() {
  return <main className="flex-1 p-6">
  {/* Dashboard Page */}
  <div id="dashboard-page" className="page-content">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-3xl font-bold">Dashboard</h2>
        <p className="text-gray-400 mt-1">
          Welcome back! Here's what's happening with your T-shirt store.
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <i className="fas fa-download mr-2" />
          Export Report
        </button>
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <i className="fas fa-plus mr-2" />
          Quick Add Product
        </button>
      </div>
    </div>
    {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Total Orders</p>
            <p className="text-3xl font-bold text-white mt-2">1,847</p>
            <p className="text-green-400 text-sm mt-1">
              <i className="fas fa-arrow-up mr-1" />
              +12.5% from last month
            </p>
          </div>
          <div className="p-3 bg-blue-600 rounded-lg">
            <i className="fas fa-shopping-cart text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Revenue</p>
            <p className="text-3xl font-bold text-white mt-2">৳2,45,678</p>
            <p className="text-green-400 text-sm mt-1">
              <i className="fas fa-arrow-up mr-1" />
              +18.2% from last month
            </p>
          </div>
          <div className="p-3 bg-green-600 rounded-lg">
            <i className="fas fa-dollar-sign text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">T-Shirts Sold</p>
            <p className="text-3xl font-bold text-white mt-2">3,256</p>
            <p className="text-red-400 text-sm mt-1">
              <i className="fas fa-arrow-down mr-1" />
              -3.1% from last month
            </p>
          </div>
          <div className="p-3 bg-purple-600 rounded-lg">
            <i className="fas fa-tshirt text-white text-xl" />
          </div>
        </div>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 hover:border-orange-500 transition-colors">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-400 text-sm">Active Customers</p>
            <p className="text-3xl font-bold text-white mt-2">1,892</p>
            <p className="text-green-400 text-sm mt-1">
              <i className="fas fa-arrow-up mr-1" />
              +7.8% from last month
            </p>
          </div>
          <div className="p-3 bg-orange-600 rounded-lg">
            <i className="fas fa-users text-white text-xl" />
          </div>
        </div>
      </div>
    </div>
    {/* Quick Stats Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Low Stock Alert</h3>
          <i className="fas fa-exclamation-triangle text-yellow-400" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Vintage Rock Tee</span>
            <span className="text-yellow-400 text-sm font-medium">5 left</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Basic Cotton Tee</span>
            <span className="text-yellow-400 text-sm font-medium">8 left</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Premium Hoodie</span>
            <span className="text-red-400 text-sm font-medium">2 left</span>
          </div>
        </div>
        <button className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-lg text-sm transition-colors">
          Restock Items
        </button>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Top Categories</h3>
          <i className="fas fa-chart-bar text-blue-400" />
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Graphic Tees</span>
            <div className="flex items-center">
              <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                <div className="w-12 h-2 bg-blue-500 rounded-full" />
              </div>
              <span className="text-sm text-blue-400">75%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Basic Tees</span>
            <div className="flex items-center">
              <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                <div className="w-10 h-2 bg-green-500 rounded-full" />
              </div>
              <span className="text-sm text-green-400">62%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">Hoodies</span>
            <div className="flex items-center">
              <div className="w-16 h-2 bg-gray-700 rounded-full mr-2">
                <div className="w-6 h-2 bg-purple-500 rounded-full" />
              </div>
              <span className="text-sm text-purple-400">38%</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <i className="fas fa-clock text-gray-400" />
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-400 rounded-full mt-2" />
            <div>
              <p className="text-gray-300">New order #1847</p>
              <p className="text-gray-500">2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2" />
            <div>
              <p className="text-gray-300">Product reviewed</p>
              <p className="text-gray-500">15 minutes ago</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2" />
            <div>
              <p className="text-gray-300">Stock updated</p>
              <p className="text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Charts Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Recent Orders</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=50&h=50&fit=crop&crop=center"
                alt="T-shirt"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="font-medium text-white">Vintage Rock Band Tee</p>
                <p className="text-sm text-gray-400">Order #1847 • Size: L</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-400">৳890</p>
              <p className="text-xs text-gray-400">2 min ago</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=50&h=50&fit=crop&crop=center"
                alt="T-shirt"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="font-medium text-white">Basic Cotton Tee</p>
                <p className="text-sm text-gray-400">Order #1846 • Size: M</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-400">৳450</p>
              <p className="text-xs text-gray-400">15 min ago</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 bg-dark-700 rounded-lg hover:bg-gray-700 transition-colors">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1583743814966-8936f37f5a2e?w=50&h=50&fit=crop&crop=center"
                alt="Hoodie"
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="ml-4">
                <p className="font-medium text-white">Premium Cotton Hoodie</p>
                <p className="text-sm text-gray-400">Order #1845 • Size: XL</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-semibold text-green-400">৳1,250</p>
              <p className="text-xs text-gray-400">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Top Selling Products</h3>
          <button className="text-blue-400 hover:text-blue-300 text-sm">
            View All
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=40&h=40&fit=crop&crop=center"
                alt="Product"
                className="w-10 h-10 rounded object-cover"
              />
              <div className="ml-3">
                <p className="font-medium text-white">Vintage Rock Tee</p>
                <p className="text-sm text-gray-400">ৱ890 • In stock: 156</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-blue-400 font-semibold">547 sold</span>
              <p className="text-xs text-gray-400">This month</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=40&h=40&fit=crop&crop=center"
                alt="Product"
                className="w-10 h-10 rounded object-cover"
              />
              <div className="ml-3">
                <p className="font-medium text-white">Basic Cotton Tee</p>
                <p className="text-sm text-gray-400">৻450 • In stock: 89</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-blue-400 font-semibold">423 sold</span>
              <p className="text-xs text-gray-400">This month</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=40&h=40&fit=crop&crop=center"
                alt="Product"
                className="w-10 h-10 rounded object-cover"
              />
              <div className="ml-3">
                <p className="font-medium text-white">Graphic Design Tee</p>
                <p className="text-sm text-gray-400">ৱ720 • In stock: 234</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-blue-400 font-semibold">389 sold</span>
              <p className="text-xs text-gray-400">This month</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://images.unsplash.com/photo-1583743814966-8936f37f5a2e?w=40&h=40&fit=crop&crop=center"
                alt="Product"
                className="w-10 h-10 rounded object-cover"
              />
              <div className="ml-3">
                <p className="font-medium text-white">Premium Hoodie</p>
                <p className="text-sm text-gray-400">ৱ1,250 • In stock: 45</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-blue-400 font-semibold">267 sold</span>
              <p className="text-xs text-gray-400">This month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Performance Metrics */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 text-center">
        <div className="p-3 bg-blue-600 rounded-lg w-fit mx-auto mb-4">
          <i className="fas fa-eye text-white text-xl" />
        </div>
        <h4 className="text-2xl font-bold mb-2">45,678</h4>
        <p className="text-gray-400 text-sm">Page Views</p>
        <p className="text-green-400 text-xs mt-1">+15.3% vs last month</p>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 text-center">
        <div className="p-3 bg-green-600 rounded-lg w-fit mx-auto mb-4">
          <i className="fas fa-percentage text-white text-xl" />
        </div>
        <h4 className="text-2xl font-bold mb-2">3.2%</h4>
        <p className="text-gray-400 text-sm">Conversion Rate</p>
        <p className="text-green-400 text-xs mt-1">+0.8% vs last month</p>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 text-center">
        <div className="p-3 bg-purple-600 rounded-lg w-fit mx-auto mb-4">
          <i className="fas fa-shopping-basket text-white text-xl" />
        </div>
        <h4 className="text-2xl font-bold mb-2">ৱ2,340</h4>
        <p className="text-gray-400 text-sm">Avg. Order Value</p>
        <p className="text-red-400 text-xs mt-1">-2.1% vs last month</p>
      </div>
      <div className="bg-dark-800 rounded-xl p-6 border border-gray-700 text-center">
        <div className="p-3 bg-orange-600 rounded-lg w-fit mx-auto mb-4">
          <i className="fas fa-undo text-white text-xl" />
        </div>
        <h4 className="text-2xl font-bold mb-2">2.8%</h4>
        <p className="text-gray-400 text-sm">Return Rate</p>
        <p className="text-green-400 text-xs mt-1">-0.5% vs last month</p>
      </div>
    </div>
  </div>
  {/* Products Page */}
  <div id="products-page" className="page-content hidden">
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-3xl font-bold">T-Shirt Products</h2>
        <p className="text-gray-400 mt-1">
          Manage your t-shirt inventory and product catalog
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors">
          <i className="fas fa-download mr-2" />
          Export CSV
        </button>
        <button
        
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors"
        >
          <i className="fas fa-plus mr-2" />
          Add T-Shirt
        </button>
      </div>
    </div>
    <div className="bg-dark-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="p-6 border-b border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="relative">
              <input
                type="text"
                id="product-search"
                placeholder="Search t-shirts..."
                className="bg-dark-700 border border-gray-600 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
              />
              <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
            </div>
            <select
              id="category-filter"
              className="bg-dark-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Categories</option>
              <option>Graphic Tees</option>
              <option>Basic Tees</option>
              <option>Premium Tees</option>
              <option>Vintage Tees</option>
              <option>Hoodies</option>
            </select>
            <select
              id="status-filter"
              className="bg-dark-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Draft</option>
              <option>Out of Stock</option>
            </select>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-dark-700">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                <input
                  type="checkbox"
                  className="rounded bg-dark-700 border-gray-600 text-blue-600"
                />
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Sold
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  </div>
  
</main>
;
}
