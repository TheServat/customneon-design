<template>
  <div
    class="design-container row q-col-gutter-lg q-pa-md"
    :style="{
      backgroundImage: `url(/background/${backgroundStore.background.image})`,
      backgroundColor: backgroundStore.background.color,
    }"
  >
    <div class="col-md-8">
      <div ref="signParent" class="fit" style="position: relative">
        <div
          class="sign-text"
          ref="textSign"
          :style="{
            fontFamily: `${fontStore.font}`,
            textAlign: textAlign as any,
            ...textStyle,
          }"
          v-html="convertBr(text || 'Your Text')"
        ></div>
        <div class="background-selector" ref="backgroundSelector">
          <div class="row q-col-gutter-sm">
            <div
              v-for="(image, index) in backgroundStore.backgroundList"
              :key="index"
              index
              class="col-auto background-item"
              :class="{
                selected:
                  backgroundStore.selectedIndex === index ? true : false,
              }"
              @click="backgroundStore.select(index)"
            >
              <img
                :src="`/background/${image.image}`"
                style="width: 70px"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <q-card class="my-card">
        <q-card-section>
          <div class="step-header">
            <span class="number">1</span>
            <span class="text"> ENTER YOUR TEXT </span>
          </div>
          <div class="step-content">
            <div class="title">
              Create your own stunning Custom Neon sign in a few simple steps.
            </div>
            <div class="input">
              <q-input
                v-model="text"
                type="textarea"
                class="text-input"
                bg-color="grey-4"
                outlined
                rounded
                input-class="text-center"
                placeholder="ENTER TEXT HERE
Press Enter/Return for a new line"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-section v-if="selectedFont">
          <div class="step-header">
            <span class="number">2</span>
            <span class="text"> CHOOSE FONT </span>
          </div>
          <div class="step-content">
            <div class="title">
              Pick from over 40 typefaces. Prices vary by the amount of LED neon
              required.
            </div>
            <div class="input">
              <div class="selected-input">
                <q-btn
                  outline
                  class="font-input bg-grey-4"
                  flat
                  @click="showFonts = !showFonts"
                >
                  <div class="row items-center q-col-gutter-sm q-px-md q-py-sm">
                    <div class="col-10">
                      <img
                        class="image block"
                        :src="`/fonts/${selectedFont.toLowerCase()}.svg`"
                        alt=""
                      />
                    </div>
                    <div class="col">
                      <q-icon
                        :name="
                          showFonts
                            ? 'keyboard_arrow_down'
                            : 'keyboard_arrow_up'
                        "
                      />
                    </div>
                  </div>
                </q-btn>
              </div>
              <div
                v-if="showFonts"
                class="fonts row q-col-gutter-sm q-col-gutter-y-lg q-mt-sm"
              >
                <div
                  v-for="(font, index) in fontStore.fontList"
                  :key="index"
                  class="col-md-3 col-sm-6"
                >
                  <q-btn
                    :class="{
                      'bg-grey-4':
                        selectedFont.toLowerCase() === font.toLowerCase(),
                    }"
                    @click="fontStore.select(font)"
                  >
                    <img
                      :src="`/fonts/${font.toLowerCase()}.svg`"
                      class="block font-list"
                      alt=""
                    />
                  </q-btn>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section v-if="colorStore.selectedIndex >= -1">
          <div class="step-header">
            <span class="number">3</span>
            <span class="text"> CHOOSE COLOR </span>
          </div>
          <div class="step-content">
            <div class="input">
              <div class="row color-list q-col-gutter-sm">
                <div
                  v-for="(color, index) in colorStore.colorList"
                  :key="index"
                  class="col-1 color-item"
                >
                  <q-btn
                    class="color"
                    :ripple="false"
                    flat
                    round
                    @click="colorStore.select(index)"
                    :class="{ selected: colorStore.selectedIndex === index }"
                  >
                    <q-tooltip>{{ color.tooltip }}</q-tooltip>
                    <div>
                      <div
                        :style="{
                          backgroundColor: color.color,
                        }"
                        class="inner"
                      ></div>
                    </div>
                  </q-btn>
                  <div class="color-text">
                    {{ color.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="rgb-color q-pa-sm q-mt-md">
            <div class="row items-center">
              <div class="col-auto">
                <q-btn
                  class="color"
                  :ripple="false"
                  flat
                  round
                  @click="colorStore.select(-1)"
                  :class="{ selected: colorStore.selectedIndex === -1 }"
                >
                  <div>
                    <div
                      :style="{
                        backgroundColor: rgbColor,
                      }"
                      class="inner"
                    ></div>
                  </div>
                </q-btn>
              </div>
              <div class="col-auto">
                <div class="desc">
                  <div class="rgb-title">RGB COLOR CHANGING</div>
                  <div class="rgb-desc">
                    Multiple colors with static and dynamic modes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section v-if="selectedSize">
          <div class="step-header">
            <span class="number">4</span>
            <span class="text"> CHOSE SIZE </span>
          </div>
          <div class="step-content">
            <div class="row size-list q-col-gutter-sm">
              <div
                v-for="(size, index) in sizeStore.sizeList"
                :key="index"
                class="col-md-6 col-sm-12"
              >
                <div
                  class="size-item"
                  :class="{ 'bg-white': sizeStore.selectedIndex === index }"
                  @click="sizeStore.select(index)"
                >
                  <div class="row items-center justify-between">
                    <div class="col-6">
                      <p class="title">{{ size.title }}</p>
                      <p class="size">Length: {{ size.width }}cm</p>
                    </div>
                    <div class="col-6 text-right">
                      <p class="price">${{ size.price }}</p>
                      <p class="size">Height: {{ size.height }}cm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section v-if="selectedBackBoard">
          <div class="step-header">
            <span class="number">4</span>
            <span class="text"> BACKBOARD STYLE </span>
          </div>
          <div class="step-content">
            <div class="row back-board-list q-col-gutter-sm">
              <div
                v-for="(backBoard, index) in backBoardStore.backBoardList"
                :key="index"
                class="col-md-4 col-sm-6"
              >
                <div
                  class="back-board-item"
                  :class="{
                    'bg-white': backBoardStore.selectedIndex === index,
                  }"
                  @click="backBoardStore.select(index)"
                >
                  <div class="row items-center justify-center">
                    <div class="col-6">
                      <p class="title">{{ backBoard.title }}</p>
                    </div>
                    <div class="col-6 text-right">
                      <p class="size">
                        {{ backBoard.price ? `+${backBoard.price}` : 'Free' }}
                      </p>
                    </div>
                    <div class="col-12">
                      <img :src="`/back-board/${backBoard.image}.png`" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </q-card-section>

        <q-card-section>
          <div class="total text-right">
            Total: <span class="price"> ${{ price }}</span>
          </div>
        </q-card-section>

        <q-card-section>
          <q-btn color="primary" label="Order" class="fit" size="xl" />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useBackboardStore } from 'src/stores/back-board-store';
import { useBackgroundStore } from 'src/stores/background-store';
import { useColorStore } from 'src/stores/color-store';
import { useFontStore } from 'src/stores/font-store';
import { useSizeStore } from 'src/stores/size-store';
import { computed, onMounted, ref } from 'vue';
import Hammer from 'hammerjs';

const fontStore = useFontStore();
const colorStore = useColorStore();
const sizeStore = useSizeStore();
const backBoardStore = useBackboardStore();
const backgroundStore = useBackgroundStore();
const selectedBackBoard = computed(() => backBoardStore.backBoard);
const selectedFont = computed(() => fontStore.font);
const selectedSize = computed(() => sizeStore.size);
const selectedColor = computed(() => colorStore.color);
const showFonts = ref(false);
const rgbColor = ref('');
const lightOn = ref(true);
const signParent = ref<HTMLDivElement>();
const backgroundSelector = ref<HTMLDivElement>();
const color = computed(() =>
  selectedColor.value === 'rgb' ? rgbColor.value : selectedColor.value.color
);
const textAlign = ref('left');
const textStyle = computed(() => {
  return lightOn.value
    ? {
        textShadow: `rgb(255, 255, 255) 0px 0px 2px, rgb(255, 255, 255) 0px 0px 5px, rgb(255, 255, 255) 0px 0px 10px, ${color.value} 0px 0px 20px, ${color.value} 0px 0px 30px, ${color.value} 0px 0px 40px, ${color.value} 0px 0px 55px, ${color.value} 0px 0px 65px, ${color.value} 0px 0px 75px, ${color.value} 0px 0px 95px, ${color.value} 0px 0px 120px`,
        color: 'rgb(255,255,255)',
      }
    : {
        textShadow: `rgb(181, 181, 181) 0px 1px 0px, rgb(169, 169, 169) 0px 2px 0px,
    rgb(148, 148, 148) 0px 3px 0px, rgb(125, 125, 125) 0px 4px 0px,
    rgba(0, 0, 0, 0.23) 0px 0px 5px, rgba(0, 0, 0, 0.43) 0px 1px 3px,
    rgba(0, 0, 0, 0.4) 1px 4px 6px, rgba(0, 0, 0, 0.38) 0px 5px 10px,
    rgba(0, 0, 0, 0.25) 3px 7px 12px`,
        color: 'rgb(244, 244, 244)',
      };
});

const textSign = ref<HTMLDivElement>();

const convertBr = (text: string) =>
  text.replace(/<\/[^>]+(>|$)/g, '').replaceAll('\n', '<br>');
const price = computed(
  () => selectedSize.value.price + selectedBackBoard.value.price
);
let rgbSelected = 0;
onMounted(async () => {
  setInterval(() => {
    rgbColor.value = colorStore.colorList[rgbSelected].color;
    rgbSelected++;
    if (rgbSelected >= colorStore.colorList.length) {
      rgbSelected = 0;
    }
  }, 1500);

  if (backgroundSelector.value && signParent.value) {
    backgroundSelector.value.style.left = `${
      signParent.value.offsetWidth / 2 -
      backgroundSelector.value.offsetWidth / 2
    }px`;
    backgroundSelector.value.style.top = `${
      window.innerHeight - backgroundSelector.value.offsetHeight * 3
    }px`;
  }
  if (textSign.value && signParent.value) {
    const hm = new Hammer(textSign.value);
    hm.add(new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0 }));

    const textLeft =
      (signParent.value.offsetLeft || 0) +
      (signParent.value.offsetWidth || 0) / 2 -
      (textSign.value.offsetWidth || 0) / 2;
    textSign.value.style.left = `${textLeft}px`;

    const maxX =
      signParent.value.offsetLeft +
      signParent.value.offsetWidth -
      (textSign.value.offsetWidth + 20);

    const maxY = window.innerHeight - textSign.value.offsetHeight * 1.5;
    let lastPosX = textSign.value.offsetLeft;
    let lastPosY = textSign.value.offsetTop;
    let isDragging = false;
    const handleDrag = (ev: HammerInput) => {
      const elem = ev.target;

      if (!isDragging) {
        isDragging = true;
        lastPosX = elem.offsetLeft;
        lastPosY = elem.offsetTop;
      }

      const posX = ev.deltaX + lastPosX;
      const posY = ev.deltaY + lastPosY;
      if (posX < maxX && posX > 20) {
        elem.style.left = posX + 'px';
      }
      if (posY < maxY && posY > 20) {
        elem.style.top = posY + 'px';
      }

      if (ev.isFinal) {
        isDragging = false;
      }
    };
    hm.on('pan', handleDrag);
  }
});

defineOptions({
  name: 'DesignerComponent',
});

const text = ref<string>();
</script>
<style lang="scss">
.design-container {
  background-repeat: no-repeat;
}
.font-input {
  .image {
    width: auto;
    height: 35px;
  }
}

.text-input textarea {
  resize: none !important;
  font-size: 1.1rem;
}
.step-header {
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 0 2px;
  .text {
    padding: 10px 0 2px;
  }
  .number {
    background-color: #5761fe;
    color: #fff;
    border-radius: 3px;
    padding: 0px 10px;
    font-size: 16px;
    margin-right: 5px;
    position: relative;
    top: -1px;
    display: inline-block;
  }
}
.step-content {
  .title {
    color: #828282;
    font-size: 12px;
    text-align: left;
    margin: 0 0 10px;
  }
}
.font-list {
  max-width: 87px;
  max-height: 29px;
  width: 100%;
}
.color-list {
  text-align: center;
  .color-item {
    .color {
      .inner {
        height: 30px;
        width: 30px;
        border-radius: 50%;
      }
      border-radius: 50%;
      padding: 4px;
      &.selected {
        border: 2px $blue solid;
      }
    }
  }
  .color-text {
    width: 100%;
    height: auto;
    text-align: center;
    line-height: 0.7rem !important;
    transition: all 0.5s ease;
    padding: 0;
    margin-top: 10px;
    color: #2f2f2f99;
    font-size: 10px !important;
  }
}
.rgb-color {
  .color {
    .inner {
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
    border-radius: 50%;
    padding: 4px;
    &.selected {
      border: 2px $blue solid;
    }
  }
  .desc {
    .rgb-title {
      color: #505050;
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      text-transform: uppercase;
    }
    .rgb-desc {
      font-size: 10px;
      line-height: 11px;
      color: #979797;
    }
  }
}
.size-item {
  border: 1px solid #ff7ac7;
  padding: 5px;
  background: #f5f5f5;
  border-radius: 15px;
  font-size: 1.1rem !important;
  cursor: pointer;
  line-height: 1.5rem;
  transition: all 0.5s ease;
  .title {
    font-weight: 600;
    font-size: 12px;
  }
  .price {
    color: #000;
    font-size: 18px;
    padding-left: 0px;
    font-weight: 600;
  }
  .size {
    color: #696969;
    font-size: 12px !important;
  }
}
.back-board-item {
  border: 1px solid #ff7ac7;
  padding: 5px;
  background: #f5f5f5;
  border-radius: 15px;
  font-size: 1.1rem !important;
  cursor: pointer;
  line-height: 1.5rem;
  transition: all 0.5s ease;
}
.total {
  font-weight: 500;
  font-size: 2rem;
  border: 1px solid #ff7ac7;
  padding: 18px 10px;
  background: #f5f5f5;
  border-radius: 5px;
  .price {
    font-weight: normal;
    color: #ff84c7;
  }
}
.background-selector {
  position: absolute;

  .background-item {
    cursor: pointer;
    &.selected {
      img {
        border-color: #ff7ac7;
      }
    }
    img {
      border-radius: 5px;
      border: 2px solid #000;
      padding: 1px;
    }
  }
}
.sign-text {
  padding: 0;
  margin: 0;
  top: 200px;
  position: absolute;
  font-size: 5rem;
  text-wrap: nowrap;
  cursor: pointer;
  font-variant-ligatures: no-common-ligatures;
  white-space: nowrap;
  line-height: 120%;
  transition: text-shadow 0.5s ease;
}
</style>
