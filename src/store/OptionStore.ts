import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface BearState {
  bears: number

  increase: (by: number) => void
}

const useStore = create<BearState>()(
  persist((set) => ({
    bears: 0,
    increase: () => set((state) => ({ bears: state.bears + 1 })),
  })),
);
