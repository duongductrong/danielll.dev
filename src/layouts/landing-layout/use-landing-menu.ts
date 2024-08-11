import { create } from "zustand";

export interface LandingMenuState {
  isOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  openMenu: () => void;
}

export const useLandingMenu = create<LandingMenuState>()((set) => ({
  isOpen: false,
  toggleMenu: () => set((state) => ({ ...state, isOpen: !state.isOpen })),
  closeMenu: () => set((state) => ({ ...state, isOpen: false })),
  openMenu: () => set((state) => ({ ...state, isOpen: true })),
}));
