<!--
  Script Tray Website
  Copyright (c) 2024 Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import DownloadNav from './components/DownloadNav.vue'
</script>

<template>
  <header>
    <h1>Script Tray</h1>
    Run commands from your system tray<br/>
  </header>
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
  <footer>Cr Me</footer>
</template>

<style lang="stylus" scoped>
header
  text-align right
  float right
.navBtns
  text-align center
  margin-top 12px
  margin-bottom 12px
section  //  main body
  flex auto
  overflow auto
  text-align left
  margin-left 12px
footer
  text-align right
  padding 2px
</style>
