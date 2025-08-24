import { create } from "zustand";

interface UserState {
  cartCount: number;
  increment: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  cartCount: 0,
  increment: () => set((state) => ({ cartCount: state.cartCount + 1 })),
}));
