const orders = [
  {
    orderId: "202534",
    date: "2025-12-05",
    customerName: "Abdullah",
    customerPhone: "0312-1234567",
    address: "Karachi, Pakistan",
    status: "Delivered",
    itemsCount: 3,
    subtotal: 158000,
    delivery: 200,
    total: 158200,
    productImage: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",

    products: [
      {
        title: "Honda 70",
        qty: 1,
        price: 150000,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
      },
      {
        title: "Tail Light",
        qty: 2,
        price: 4000,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
      }
    ]
  },

  {
    orderId: "202535",
    date: "2025-12-03",
    customerName: "Uzair",
    customerPhone: "0345-5566778",
    address: "Lahore, Pakistan",
    status: "Pending",
    itemsCount: 1,
    subtotal: 45000,
    delivery: 200,
    total: 45200,
    productImage: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",

    products: [
      {
        title: "Yamaha Helmet",
        qty: 1,
        price: 45000,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
      }
    ]
  },

  {
    orderId: "202536",
    date: "2025-12-01",
    customerName: "Ahsan",
    customerPhone: "0300-9988775",
    address: "Islamabad, Pakistan",
    status: "Shipped",
    itemsCount: 5,
    subtotal: 98500,
    delivery: 200,
    total: 98700,
    productImage: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",

    products: [
      {
        title: "LED Indicators",
        qty: 3,
        price: 1500,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
      },
      {
        title: "Bike Cover",
        qty: 2,
        price: 30000,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
      }
    ]
  },

  {
    orderId: "202537",
    date: "2025-11-28",
    customerName: "Imran",
    customerPhone: "0311-3344556",
    address: "Multan, Pakistan",
    status: "Cancelled",
    itemsCount: 2,
    subtotal: 22000,
    delivery: 0,
    total: 22000,
    productImage: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",

    products: [
      {
        title: "Bike Chain",
        qty: 1,
        price: 12000,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
      },
      {
        title: "Engine Oil",
        qty: 1,
        price: 10000,
        image: "https://elyscents.pk/cdn/shop/files/3perfume.jpg?v=1760181185&width=360",
      }
    ]
  }
];

export default orders