import { defineStore } from 'pinia';

export const useBackboardStore = defineStore('back-board', {
  state: () => ({
    backBoardList: [
      {
        image:'backboardaround',
        title: 'Cut Around',
        price:0
      },
      {
        image:'backboardfreestand',
        title: 'Rectangle',
        price:0
      },
      {
        image:'backboardletter',
        title: 'Cut-To-Letter',
        price:30
      },
      {
        image:'backboardnaked',
        title: 'Naked Neon',
        price:49
      },
      {
        image:'backboardopenbox',
        title: 'Acrylic Stand',
        price:49
      },
      {
        image:'backboardrectangle',
        title: 'Open Box',
        price:91
      }
    ],
    selectedIndex: 0
  }),
  getters: {
    backBoard: (state) => {
      return  state.backBoardList[state.selectedIndex]
    },
  },
  actions: {
    select(backBoard:number) {
      this.selectedIndex = backBoard;
    },
  },
});
