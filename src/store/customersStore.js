import { create } from 'zustand';

import customers from '../data/customers.json';

export const useCustomersStore = create((set) => ({
  customers: customers,

  filterCustomers: (query) => set(() => ({
    customers: customers.filter((customer) => customer['customer name'].toLowerCase().includes(query.toLowerCase())
    || customer.company.toLowerCase().includes(query.toLowerCase())
    || customer['phone number'].toLowerCase().includes(query.toLowerCase())
    || customer.email.toLowerCase().includes(query.toLowerCase())
    || customer.country.toLowerCase().includes(query.toLowerCase()))
  }))
}));
