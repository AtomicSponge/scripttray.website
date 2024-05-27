<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import DownloadLinks from './components/DownloadLinks.vue'
import SiteFooter from './components/SiteFooter.vue'

import { ImageZoom } from '@spongex/vue-image-zoom'
</script>

<template>
  <SiteHeader/>
  <section>
    <div id="test">
    <ImageZoom src="/src/assets/robot-96x96.png" width="100"/>
    </div>
    <ImageZoom src="/src/assets/github-mark-white.png" width="100"/>

    <div>
      <a id="downloads"></a><h2>Downloads</h2>
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
#test
  margin 0 auto
  text-align center
</style>
