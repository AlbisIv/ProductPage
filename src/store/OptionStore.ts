/* eslint-disable camelcase */
import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface OptionState {
  '1080p': number,
  '4k': number,
  battery_accessories: number,

  addOptionCount: (by: number, option:string) => void
}

const useStore = create<OptionState>()(
  persist((set) => ({
    '1080p': 0,
    '4k': 0,
    battery_accessories: 0,
    addOptionCount: (by, option) => (set({ [option]: by })),
  })),
);

export default useStore;
