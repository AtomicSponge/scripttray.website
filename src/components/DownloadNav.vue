<!--
  Script Tray Website
  Copyright (c) 2024 Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import { checkReleases } from '../lib/checkReleases.ts'
import { downloadFile } from '../lib/downloadFile.ts'

const filesObj = await checkReleases()

/**
 * Download latest Windows installer
 */
const downloadWin = () => {
  if(filesObj.winURL === 'invalid' || filesObj.winURL === undefined)
    alert('Unable to locate latest release!  Please try again later.')
  else downloadFile(filesObj.winURL)
}

/**
 * Download latest Mac installer
 */
const downloadMac = () => {
  if(filesObj.macURL === 'invalid' || filesObj.macURL === undefined)
    alert('Unable to locate latest release!  Please try again later.')
  else downloadFile(filesObj.macURL)
}

/**
 * Download latest Linux installer
 */
const downloadLin = () => {
  if(filesObj.linURL === 'invalid' || filesObj.linURL === undefined)
    alert('Unable to locate latest release!  Please try again later.')
  else downloadFile(filesObj.linURL)
}
</script>

<template>
  <nav>
    <button @click="downloadWin">Download for Windows</button>
    <button @click="downloadMac">Download for Mac</button>
    <button @click="downloadLin">Download for Linux</button>
  </nav>
</template>

<style lang="stylus" scoped>
nav > button + button
  margin-left 24px
</style>
