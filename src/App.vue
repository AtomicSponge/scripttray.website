<!--
  Script Tray Website
  Copyright (c) 2024 Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import DownloadNav from './components/DownloadNav.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader/>
  <Suspense>
    <template #default>
      <DownloadNav class="navBtns"/>
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
  <section>
    test text
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
  margin-left 12px
</style>
