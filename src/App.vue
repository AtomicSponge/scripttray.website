<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import DownloadLinks from './components/DownloadLinks.vue'
import SiteFooter from './components/SiteFooter.vue'

import ImageZoom from './components/ImageZoom.vue'
//import ImageZoom from '@spongex/vue-image-zoom'
</script>

<template>
  <SiteHeader/>
  <section>
    <div>
      <h2>Test header</h2>
      test text<br/>test text<br/>test text<br/>
    </div>
    <ImageZoom src="/src/assets/robot-96x96.png" width="100"/>
    <ImageZoom src="/src/assets/github-mark-white.png" width="100"/>
    <div>
      <!-- Downloads -->
      <Suspense>
        <template #default>
          <DownloadLinks/>
        </template>
        <template #fallback>
          Loading...
        </template>
      </Suspense>
      <!-- End Downloads -->
    </div>
    <div>
      <h2>Test header</h2>
      test text<br/>test text<br/>test text<br/>
    </div>
    <div>
      <h2>Test header</h2>
      test text<br/>test text<br/>test text<br/>
    </div>
    <div>
      <h2>Test header</h2>
      test text<br/>test text<br/>test text<br/>
    </div>
  </section>
  <SiteFooter/>
</template>

<style lang="stylus" scoped>
.navBtns
  text-align center
  margin-top 12px
  margin-bottom 12px
section  //  main body
  flex auto
  overflow auto
  text-align left
</style>
