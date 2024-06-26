import { defineStore } from 'pinia';

export const useSizeStore = defineStore('size', {
  state: () => ({
    sizeList: [
      {
        id:1,
        title:'Mini',
        width: 30,
        height:15,
        price: 100,
      },
      {
        id:2,
        title:'Extra small',
        width: 60,
        height:30,
        price:200
      },
      {
        id:3,
        title:'Small',
        width: 70,
        height:30,
        price:350
      },
      {
        id:4,
        title:'Medium',
        width: 100,
        height:40,
        price:450
      },
      {
        id:5,
        title:'Large',
        width: 150,
        height:50,
        price:555
      },
      {
        id:6,
        title:'Large',
        width: 150,
        height:70,
        price:885
      },
      {
        id:7,
        title:'X large',
        width: 210,
        height:75,
        price:1250
      },
      {
        id:8,
        title:'XX large',
        width: 280,
        height:90,
        price:1678
      },
      {
        id:9,
        title:'Supersized',
        width: 400,
        height:120,
        price:2535
      }
    ],
    selectedIndex: 0
  }),
  getters: {
    size: (state) => {
        return state.sizeList[state.selectedIndex]
    },
  },
  actions: {
    select(size:number) {
      this.selectedIndex = size;
    },
  },
});
