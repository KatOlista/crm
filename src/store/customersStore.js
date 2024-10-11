import { create } from 'zustand';

import customers from '../data/customers.json';
import { DEFAULT_FROM_ITEM, PAGE_SIZE } from '../utils';

export const useCustomersStore = create((set) => ({
  customers: customers,

  visibleCustomers: customers.slice(DEFAULT_FROM_ITEM, PAGE_SIZE),

  setVisibleCustomers: (fromItem, page) => set((state) => ({
    visibleCustomers: state.customers.slice(fromItem, page * PAGE_SIZE)
  })),

  filterCustomers: (query) => set(() => ({
    customers: customers.filter((customer) => customer['customer name'].toLowerCase().includes(query.toLowerCase())
    || customer.company.toLowerCase().includes(query.toLowerCase())
    || customer['phone number'].toLowerCase().includes(query.toLowerCase())
    || customer.email.toLowerCase().includes(query.toLowerCase())
    || customer.country.toLowerCase().includes(query.toLowerCase()))
  }))
}));
