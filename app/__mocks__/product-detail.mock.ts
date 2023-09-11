import { IProduct } from "@/src/interfaces/i-products";

export const productMock: IProduct = {
  id: "MLA825206827",
  title: "Apple iPhone 11 (128 Gb) - Negro",
  price: 501484,
  installments: {
    quantity: 12,
    amount: 94278.99,
  },
  address: {
    state_name: "Capital Federal",
    city_name: "Capital Federal",
  },
  thumbnail: "http://http2.mlstatic.com/D_865864-MLA46114990464_052021-I.jpg",
  condition: "new",
  shipping: {
    free_shipping: true,
  },
};

export const emptyProduct = {
    id: "",
    title: "",
    price: 0,
    installments: {
      quantity: 0,
      amount: 0,
    },
    address: {
      state_name: "",
      city_name: "",
    },
    thumbnail: "",
    condition: "",
    shipping: {
      free_shipping: false,
    },
  };
  
