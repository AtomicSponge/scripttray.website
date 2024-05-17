<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import DownloadNav from './components/DownloadNav.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader/>
  <Suspense>
    <template #default><DownloadNav class="navBtns"/></template>
    <template #fallback>&nbsp;<br/><br/>&nbsp;</template>
  </Suspense>
  <section>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
    <h2>Test header</h2>
    test text<br/>test text<br/>test text<br/>
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
