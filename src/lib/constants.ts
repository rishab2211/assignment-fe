export const mockOrders = [
    { id: "PZA001", customer: "John Doe", pizza: "Margherita", quantity: 2, date: "2025-05-23 14:32", status: "Pending" },
    { id: "PZA002", customer: "Alice Smith", pizza: "Pepperoni", quantity: 1, date: "2025-05-23 15:10", status: "Delivered" },
    { id: "PZA003", customer: "Bob Johnson", pizza: "Veggie Supreme", quantity: 3, date: "2025-05-24 11:45", status: "Out for Delivery" },
    { id: "PZA004", customer: "Emily Davis", pizza: "Margherita", quantity: 1, date: "2025-05-24 12:20", status: "Preparing" },
    { id: "PZA005", customer: "David Brown", pizza: "Pepperoni", quantity: 2, date: "2025-05-24 13:05", status: "Cancelled" },
    { id: "PZA006", customer: "Olivia Taylor", pizza: "Hawaiian", quantity: 1, date: "2025-05-24 14:10", status: "Pending" },
    { id: "PZA007", customer: "Liam Wilson", pizza: "Four Cheese", quantity: 2, date: "2025-05-24 14:45", status: "Preparing" },
    { id: "PZA008", customer: "Sophia Martinez", pizza: "BBQ Chicken", quantity: 1, date: "2025-05-24 15:05", status: "Delivered" },
    { id: "PZA009", customer: "Noah Anderson", pizza: "Pepperoni", quantity: 3, date: "2025-05-24 15:30", status: "Out for Delivery" },
    { id: "PZA010", customer: "Isabella Thomas", pizza: "Veggie Supreme", quantity: 2, date: "2025-05-24 16:00", status: "Pending" },
    { id: "PZA011", customer: "Mason Jackson", pizza: "Margherita", quantity: 1, date: "2025-05-24 16:20", status: "Cancelled" },
    { id: "PZA012", customer: "Mia White", pizza: "Meat Lovers", quantity: 2, date: "2025-05-24 16:45", status: "Preparing" },
    { id: "PZA013", customer: "Ethan Harris", pizza: "Hawaiian", quantity: 1, date: "2025-05-24 17:10", status: "Delivered" },
    { id: "PZA014", customer: "Amelia Clark", pizza: "BBQ Chicken", quantity: 3, date: "2025-05-24 17:35", status: "Out for Delivery" },
    { id: "PZA015", customer: "James Lewis", pizza: "Four Cheese", quantity: 1, date: "2025-05-24 18:00", status: "Pending" }
];

export const statusColor = {
    Pending: "bg-yellow-200 text-yellow-800",
    Preparing: "bg-blue-200 text-blue-800",
    "Out for Delivery": "bg-purple-200 text-purple-800",
    Delivered: "bg-green-200 text-green-800",
    Cancelled: "bg-red-200 text-red-800",
};
