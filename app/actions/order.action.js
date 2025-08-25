"use server";

import formateMongo from "@/helpers/formateMongo";
import { dbConnect } from "../backend/connection/dbConnect";
import { orderModel } from "../backend/models/orderModel";
import { checkAdmin } from "./product.action";

import { UserModel } from "../backend/models/UserModel";

import { calculateOrdersTotal } from "@/helpers/calculateOrdersTotal";

/**
 * Get paginated and filtered list of orders
 * @param {string} query - Search query to filter orders (customer name, phone, transactionId, etc.)
 * @param {string} status - Filter by delivery status (Pending, Delivered, etc.)
 * @param {number} limit - Number of orders per page (default: 10)
 * @param {number} page - Page number (default: 1)
 * @returns {Promise<{ totalItems: number, orders: any[], currentPage: number, totalPages: number, hasNextPage: boolean, hasPrevPage: boolean, error?: boolean, message?: string }>}
 */
export default async function getOrders(
  query = "",
  status = "",
  limit = 10,
  page = 1
) {
  try {
    await dbConnect();

    const isAdmin = await checkAdmin();
    if (!isAdmin) {
      return {
        error: true,
        message: "Unauthorized",
        orders: [],
        totalItems: 0,
        currentPage: 1,
        totalPages: 1,
        hasNextPage: false,
        hasPrevPage: false,
      };
    }

    // Ensure limit and page are valid
    const validLimit = Math.max(1, Math.min(parseInt(limit) || 10, 100));
    const validPage = Math.max(1, parseInt(page) || 1);

    // Build filter
    const filter = {};

    if (query) {
      filter.$or = [
        { "address.name": { $regex: query, $options: "i" } },
        { "address.phone": { $regex: query, $options: "i" } },
        { transactionId: { $regex: query, $options: "i" } },
        { paymentMethod: { $regex: query, $options: "i" } },
      ];
    }

    if (status) {
      filter.delivered = status; // e.g. "Pending", "Delivered"
    }

    const skip = validLimit * (validPage - 1);

    const [totalItems, orders] = await Promise.all([
      orderModel.countDocuments(filter),
      orderModel
        .find(filter)
        .sort({ createdAt: -1 }) // latest orders first
        .limit(validLimit)
        .skip(skip)
        .populate({ path: "user", model: UserModel, select : ['name', 'phone'] })
        .lean(),
    ]);

    const totalPages = Math.ceil(totalItems / validLimit);
    const completedOrder =
      orders.filter((order) => order.delivered === "Delivered").length || 0;
    const totalRevenue = calculateOrdersTotal(
      orders.filter((order) => order.delivered === "Delivered")
    );

    const pendingOrder =
      orders.filter((order) => order.delivered === "Pending").length || 0;
    return {
      totalItems,
      orders: formateMongo(orders) || [],
      currentPage: validPage,
      totalPages,
      hasNextPage: validPage < totalPages,
      hasPrevPage: validPage > 1,
      error: false,
      completedOrder,
      pendingOrder,
      totalRevenue,
    };
  } catch (err) {
    console.error("Error fetching orders:", err);
    return {
      error: true,
      message: "Failed to fetch orders. Please try again later.",
      orders: [],
      totalItems: 0,
      currentPage: 1,
      totalPages: 1,
      hasNextPage: false,
      hasPrevPage: false,
    };
  }
}
