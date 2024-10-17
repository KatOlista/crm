import { create } from 'zustand';

export const useMenuStore = create((set) => ({
  isMenuOpen: false,

  setIsMenuOpen: (value) => set(() => ({
    isMenuOpen: value,
  })),
}));
