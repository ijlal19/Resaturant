const userOrder = [{
  userId: 1,
  firstName: "Abdullah",
  lastName: "Aslam",
  email: "abdullah@example.com",
  phone: "0300-1234567",
  shippingAddress: {
    street: "House #123, Street 5",
    city: "Lahore",
    state: "Punjab",
    zipCode: "54000",
    country: "Pakistan"
  },
  order: {
    trackingNumber : "1299831433",
    orderId: "#PFR-45821",
    orderDate: "2025-12-08",
    expecteddate: "2025-12-15",
    paymentMethod: "Cash on Delivery",
    deliveryTime: "2-4 working days",
    status : "Processing",
    products: [
      {
        productId: 1,
        name: "Oud Intense",
        quantity: 1,
        price: 2500,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360"
      },
      {
        productId: 2,
        name: "Musk Bloom",
        quantity: 2,
        price: 1800,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360"
      },
      {
        productId: 3,
        name: "Rose Delight",
        quantity: 1,
        price: 2000,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360"
      }
    ],
    pricing: {
      subtotal: 8100,  // 2500 + 3600 + 2000
      shipping: 200,
      discount: 100,
      grandTotal: 8200
    }
  }
}];

export default userOrder
