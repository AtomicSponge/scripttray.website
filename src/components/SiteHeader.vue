<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<template>
  <header>
    <img src="/src/assets/robot-96x96.png" class="logo"/>
    <div>
      <h1>Script Tray</h1>
      Run commands from your system tray
    </div>
  </header>
  <table class="navigation">
    <tr>
      <td><a href="#downloads">Downloads</a></td>
      <td><a href="#downloads">Another</a></td>
    </tr>
    <tr>
      <td><a href="#downloads">Downloads</a></td>
      <td><a href="#downloads">Another</a></td>
    </tr>
  </table>
</template>

<style lang="stylus" scoped>
header
  margin-left auto
  display flex
  text-align right
  line-height 1.5
table
  table-layout fixed
td
  padding-right 18px
  padding-bottom 4px
.logo
  align-self flex-end
  width 96px
  height 96px
.navigation
  position absolute
  top 12px
  left 16px

@media only screen and (max-width: 700px)
  table
    display none
</style>
