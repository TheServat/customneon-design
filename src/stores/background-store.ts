import { defineStore } from 'pinia';

export const useBackgroundStore = defineStore('background', {
  state: () => ({
    backgroundList: [
      {
        image:'lounge1.jpg',
        color:'rgb(61, 74, 83)',
      },
      {
        image:'bedroom1.jpg',
        color:'rgb(144, 142, 137)',
      },
      {
        image:'shop1usa.jpg',
        color:'rgb(24, 30, 26)',
      },
      {
        image:'wedding1.jpg',
        color:'rgb(221, 221, 221)',
      },
    ],
    selectedIndex: 0
  }),
  getters: {
    background: (state) => {

        return state.backgroundList[state.selectedIndex]

    },
  },
  actions: {
    select(background:number) {
      this.selectedIndex = background;
    },
  },
});
