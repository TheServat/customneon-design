import { defineStore } from 'pinia';

export const useColorStore = defineStore('color', {
  state: () => ({
    colorList: [
      {
        'tooltip': 'Warm white is a very popular natural-feeling white. The tube is white when off.',
        'colorId': '10',
        'title': 'Warm White',
        'color': '#fffdcf',
        'colorOff': '#f4f4f4',
        'class': 'color-10 active'
      },

      {
        'tooltip': 'White is a cooler, brighter white. The tube is white when off.',
        'colorId': '20',
        'title': 'White',
        'color': '#e1e3e6',
        'colorOff': '#f4f4f4',
        'class': 'color-20'
      },

      {
        'tooltip': 'Lemon Yellow is a very bright, eye-catching yellow. The tube is yellow when off.',
        'colorId': '30',
        'title': 'Lemon Yellow',
        'color': '#fff97c',
        'colorOff': '#fff97c',
        'class': 'color-30'
      },

      {
        'tooltip': 'Golden Yellow is a bold, rich yellow. The tube is yellow when off.',
        'colorId': '40',
        'title': 'Golden Yellow',
        'color': '#ffd62e',
        'colorOff': '#ffd62e',
        'class': 'color-40'
      },

      {
        'tooltip': 'A bright, eye-catching orange. The tube is orange when off.',
        'colorId': '50',
        'title': 'Orange',
        'color': '#ff8d02',
        'colorOff': '#ff8d02',
        'class': 'color-50'
      },

      {
        'tooltip': 'Light Red is a vivid and sophisticated brighter shade of red. The tube is white when off.',
        'colorId': '60',
        'title': 'Light Red',
        'color': '#ff7575',
        'colorOff': '#f4f4f4',
        'class': 'color-60'
      },

      {
        'tooltip': "A gorgeous 'Candy Apple' red. The tube is red when off.",
        'colorId': '70',
        'title': 'Red',
        'color': '#ff2a4d',
        'colorOff': '#ff2a4d',
        'class': 'color-70'
      },

      {
        'tooltip': 'Bright, eye-catching neon Pink remains an extremely popular choice. The tube is white when off.',
        'colorId': '90',
        'title': 'Pink',
        'color': '#ff90ff',
        'colorOff': '#f4f4f4',
        'class': 'color-90'
      },

      {
        'tooltip': 'Soft and pink as Cotton Candy. The tube is light pink when off.',
        'colorId': '80',
        'title': 'Cotton Candy',
        'color': '#eaa4ff',
        'colorOff': '#eaa4ff',
        'class': 'color-80'
      },

      {
        'tooltip': 'A popular stunning deep pink with a vivid glow. The tube is pink when off.',
        'colorId': '100',
        'title': 'Deep Pink',
        'color': '#ff5ce8',
        'colorOff': '#ff5ce8',
        'class': 'color-100'
      },

      {
        'tooltip': 'A popular stylish purple. The tube is white when off.',
        'colorId': '110',
        'title': 'Purple',
        'color': '#8c59ff',
        'colorOff': '#f4f4f4',
        'class': 'color-110'
      },

      {
        'tooltip': 'A bold, darker blue. The tube is Blue when off',
        'colorId': '120',
        'title': 'Deep Blue',
        'color': '#0274fc',
        'colorOff': '#0274fc',
        'class': 'color-120'
      },

      {
        'tooltip': 'A fantastic bright blue. The tube is White when off',
        'colorId': '130',
        'title': 'Electric Blue',
        'color': '#63aaff',
        'colorOff': '#f4f4f4',
        'class': 'color-130'
      },

      {
        'tooltip': 'A very bright, eye-catching blue. The tube is white when off.',
        'colorId': '150',
        'title': 'Ice Blue',
        'color': '#90dcff',
        'colorOff': '#f4f4f4',
        'class': 'color-150'
      },

      {
        'tooltip': 'A gorgeous blue that glows like a tropical lagoon. The tube is light blue when off.',
        'colorId': '140',
        'title': 'Tropical Blue',
        'color': '#24b7de',
        'colorOff': '#24b7de',
        'class': 'color-140'
      },

      {
        'tooltip': 'A fresh, minty green. The tube is mint when off.',
        'colorId': '160',
        'title': 'Mint',
        'color': '#80ffd9',
        'colorOff': '#80ffd9',
        'class': 'color-160'
      },

      {
        'tooltip': 'A great-looking, very bright green. The tube is white when off.',
        'colorId': '170',
        'title': 'Green',
        'color': '#85ffaa',
        'colorOff': '#f4f4f4',
        'class': 'color-170'
      },

      {
        'tooltip': 'A darker green that is still very eye-catching. The tube is green when off.',
        'colorId': '180',
        'title': 'Deep Green',
        'color': '#0bd748',
        'colorOff': '#0bd748',
        'class': 'color-180'
      },
    ],
    selectedIndex: 0
  }),
  getters: {
    color: (state) => {
      if(state.selectedIndex>=0){
        return state.colorList[state.selectedIndex]
      }
      return 'rgb'
    },
  },
  actions: {
    select(color:number) {
      this.selectedIndex = color;
    },
  },
});
