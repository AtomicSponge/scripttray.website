<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md

  Adapted from:  https://codeconvey.com/html-image-zoom-on-click/
-->

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id:string
  src:string
  alt?:string
  width?:string
  height?:string
}>()

const modal = {
  id: props.id + '_zoom_modal',
  img: props.id + '_zoom_modal_img',
}

const zoomIn = () => {
  const imgElm = <HTMLImageElement>(document.getElementById(props.id))
  const modalElm = <HTMLDivElement>(document.getElementById(modal.id))
  const modalImgElm = <HTMLImageElement>(document.getElementById(modal.img))
  modalElm.style.display = 'block'
  modalImgElm.alt = imgElm.alt
}

const zoomOut = () => {
  const modalElm = <HTMLDivElement>(document.getElementById(modal.id))
  const modalImgElm = <HTMLImageElement>(document.getElementById(modal.img))
  modalImgElm.className += ' out'
  setTimeout(() => {
    modalElm.style.display = 'none'
    modalImgElm.className = 'modal-content'
  }, 400)
}
</script>

<template>
  <img :id :src :alt :width :height class="mainImg" @click="zoomIn()">
  <div :id="modal.id" class="modal" @click="zoomOut()">
    <img :id="modal.img" :src class="modal-content" loading="lazy">
  </div>
</template>

<style lang="stylus" scoped>
.mainImg
  border-radius 5px
  cursor pointer
  transition 0.3s
  display block
  margin-left auto
  margin-right auto
.mainImg:hover
  opacity 0.7

.modal
  display none
  position fixed
  z-index 99
  padding-top 100px
  left 0
  top 0
  width 100%
  height 100%
  overflow auto
  background-color rgba(0, 0, 0, 0.9)

.modal-content
  margin auto
  display block
  width 90%
  max-width 90%
  max-height 90%

/* Zoom in */
@-webkit-keyframes zoom
  from { -webkit-transform:scale(1) }
  to { -webkit-transform:scale(2) }

@keyframes zoom
  from { transform:scale(0.4) }
  to { transform:scale(1) }

/* Zoom out */
@-webkit-keyframes zoom-out
  from { transform:scale(1) }
  to { transform:scale(0) }

@keyframes zoom-out
  from { transform:scale(1) }
  to { transform:scale(0) }

.modal-content
  -webkit-animation-name zoom
  -webkit-animation-duration 0.6s
  animation-name zoom
  animation-duration 0.6s

.out
  animation-name zoom-out
  animation-duration 0.6s

@media only screen and (max-width: 700px)
  .modal-content
    width 100%
    max-width 100%
</style>
