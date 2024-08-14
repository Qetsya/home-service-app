export const data = {
  categories: [
    {
      id: 1,
      name: "Food",
      bgcolor: { hex: "#f00" },
      icon: { url: "http://example.com/icon1.png" },
    },
    {
      id: 2,
      name: "Retail",
      bgcolor: { hex: "#0f0" },
      icon: { url: "http://example.com/icon2.png" },
    },
  ],
  businesses: [
    {
      id: 1,
      name: "Business One",
      about: "Description One",
      address: "Address One",
      category: "Food",
      contactPerson: "Person One",
      email: "email@example.com",
      images: [{ url: "http://example.com/image1.png" }],
    },
    {
      id: 2,
      name: "Business Two",
      about: "Description Two",
      address: "Address Two",
      category: "Retail",
      contactPerson: "Person Two",
      email: "email2@example.com",
      images: [{ url: "http://example.com/image2.png" }],
    },
  ],
  bookings: [],
};
