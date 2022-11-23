<template>
  <view class="target"></view>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted } from 'vue'
export default defineComponent({
  setup() {
    const observer = uni.createIntersectionObserver(getCurrentInstance()?.proxy)
    onMounted(function () {
      console.log(document.querySelector('.target'))
      observer.relativeToViewport({ right: 0, bottom: 0 }).observe('.target', ({ intersectionRatio }) => {
        observer.disconnect()
        console.log('intersectionRatio', intersectionRatio)
      })
    })
  },
})
</script>

<style lang="scss">
.target {
  margin: 25vh auto;
  width: 200rpx;
  height: 200rpx;
  background-color: #f00;
}
</style>
