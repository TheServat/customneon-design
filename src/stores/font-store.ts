import { defineStore } from 'pinia';

export const useFontStore = defineStore('font', {
  state: () => ({
    fontList: [
      'Alexa',
      'Amanda',
      'Amsterdam',
      'Austin',
      'Avante',
      'Barcelona',
      'Bayview',
      'Beachfront',
      'Bellview',
      'Buttercup',
      'Chelsea',
      'ClassicType',
      'Freehand',
      'Freespirit',
      'Greenworld',
      'LoveNeon',
      'LoveNote',
      'Marquee',
      'Mayfair',
      'Melbourne',
      'Monaco',
      'NeonGlow',
      'NeonLite',
      'Neonscript',
      'Neontrace',
      'NeoTokyo',
      'Nevada',
      'NewCursive',
      'Northshore',
      'Photogenic',
      'Rocket',
      'Royalty',
      'SciFi',
      'Signature',
      'Sorrento',
      'Typewriter',
      'Venetian',
      'Vintage',
      'Waikiki',
      'WildScript',
    ],
    _font: 'Alexa'
  }),
  getters: {
    font: (state) => state._font,
  },
  actions: {
    select(font:string) {
      this._font = font;
    },
  },
});
