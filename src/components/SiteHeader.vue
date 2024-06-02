<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<template>
  <header>
    <img src="/src/assets/robot-96x96.png" class="logo"/>
    <div class="title_a">
      <h1>Script Tray</h1>
      Run commands from your system tray
    </div>
    <div class="title_b">
      <h1>Script</h1><h1>Tray</h1>
      Run commands from your system tray
    </div>
  </header>
  <table>
    <tr>
      <td><a href="#top">Top</a></td>
      <td><a href="#downloads">Downloads</a></td>
      <td><a href="#features">Features</a></td>
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
  position absolute
  top 12px
  left 16px
td
  padding-right 18px
  padding-bottom 4px
.logo
  align-self flex-end
  width 96px
  height 96px
.title_a
  display block
.title_b
  display none

@media only screen and (max-width: 700px)
  table
    display none
@media only screen and (max-width: 410px)
  .title_a
    display none
  .title_b
    display block
</style>
