import axios from 'axios';

const BASE_URL = 'https://smserver-kdya.onrender.com/api';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const productService = {
  getAll: async () => {
    const response = await api.get('/products');
    return response.data;
  },
  
  getById: async (id: string) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/products', data);
    return response;
  },
};


export interface Product {
  _id: string;  // Changed from 'id' to '_id' to match API
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  reviews: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export const orderService = {
  getAll: async () => {
    const response = await api.get('/orders');
    return response;
  },

  create: async (data: any) => {
    const response = await api.post('/orders', data);
    return response;
  },

  update: async (id: string, data: any) => {
    const response = await api.put(`/orders/${id}`, data);
    return response;
  },

  delete: async (id: string) => {
    return await api.delete(`/orders/${id}`);
  }
};



