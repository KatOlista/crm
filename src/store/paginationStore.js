import { create } from 'zustand';

import { DEFAULT_FROM_ITEM, DEFAULT_PAGE, PAGE_SIZE } from '../utils';

export const usePaginationStore = create((set) => ({
  page: DEFAULT_PAGE,

  fromItem: DEFAULT_FROM_ITEM,

  setPage: (newPage) => set(() => ({
    page: newPage
  })),

  setFromItem: () => set((state) => ({
    fromItem: (state.page - 1) * PAGE_SIZE
  })),
}));
