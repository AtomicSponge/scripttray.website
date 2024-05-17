<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import { ref } from 'vue'

const githubURL = 'https://api.github.com/repos/AtomicSponge/script_tray/releases/latest'

/**
 * Get the release JSON from the GitHub API
 * Then parse into URLs for each OS
 * @returns Object containing processed results
 */
const checkReleases = async ():Promise<Releases> => {
  const result = await (async () => {
    try {
      const response = await fetch(githubURL)
      return response.json()
    } catch (error:any) {  //  Catch connection errors
      return <Releases>{
        message: `
          Unable to locate latest releases!<br/>
          Please try again later.<br/>${error.message}`,
        error: true
      }
    }
  })()
  if(result.error) return result  //  IIFE resulted in error, return
  if(result.message === 'Not Found') {  //  Github repo not found
    return <Releases>{
      message: `
        Unable to locate latest releases!<br/>
        Please try again later.<br/>404: Not Found`,
      error: true
    }
  }

  const winURLs:Array<URLAsset> = []
  const macURLs:Array<URLAsset> = []
  const linURLs:Array<URLAsset> = []

  //  Parse JSON from 'result' and extract URLs
  //  This assumes one of each installer type
  result.assets.forEach((asset:Asset) => {
    if(asset.browser_download_url.endsWith('.exe'))
      winURLs.push({ name: asset.name, url: asset.browser_download_url })
    else if(asset.browser_download_url.endsWith('.dmg'))
      macURLs.push({ name: asset.name, url: asset.browser_download_url })
    else
      linURLs.push({ name: asset.name, url: asset.browser_download_url })
  })

  return <Releases>{
    winURLs: winURLs,
    macURLs: macURLs,
    linURLs: linURLs,
    message: 'success',
    error: false
  }
}

const releases = ref(await checkReleases())
</script>

<template>
  <div v-if="!releases.error" id="downloads">
    <h3>Windows</h3>
    <li v-for="link in releases.winURLs">
      <a href="{{ link.url }}">{{ link.name }}</a>
    </li>
    <h3>Mac</h3>
    <li v-for="link in releases.macURLs">
      <a href="{{ link.url }}">{{ link.name }}</a>
    </li>
    <h3>Linux</h3>
    <li v-for="link in releases.linURLs">
      <a href="{{ link.url }}">{{ link.name }}</a>
    </li>
  </div>
  <!-- Display error if any -->
  <div v-else id="downloads" class="error">
    <span v-html="releases.message"></span>
  </div>
</template>

<style lang="stylus" scoped>
#downloads
  margin-left 24px
.error
  color red
</style>
