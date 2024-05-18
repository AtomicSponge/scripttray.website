<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import { ref } from 'vue'

//const GitHubURL = 'https://api.github.com/repos/AtomicSponge/script_tray/releases/latest'
const GitHubURL = 'https://api.github.com/repos/vercel/hyper/releases/latest'

/**
 * Get the release JSON from the GitHub API
 * Then parse into URLs for each OS
 * @returns Object containing processed results
 */
const checkReleases = async ():Promise<Releases> => {
  const result = await (async () => {
    try {
      const response = await fetch(GitHubURL)
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
  if (result.error) return result  //  IIFE resulted in error, return
  if (result.message === 'Not Found') {  //  Github repo not found
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
  const sourceURLs:Array<URLAsset> = []

  if (result.tarball_url)
    sourceURLs.push({ name: 'tarball', url: result.tarball_url })
  if (result.zipball_url)
    sourceURLs.push({ name: 'zipball', url: result.zipball_url })

  //  Parse JSON from 'result' and extract URLs
  result.assets.forEach((asset:Asset) => {
    if (asset.browser_download_url.endsWith('.yml')) return
    if (asset.browser_download_url.endsWith('.exe')) {
      winURLs.push({ name: asset.name, url: asset.browser_download_url })
      return
    }
    if (asset.browser_download_url.endsWith('.dmg')) {
      macURLs.push({ name: asset.name, url: asset.browser_download_url })
      return
    }
    if (asset.browser_download_url.endsWith('.deb') ||
        asset.browser_download_url.endsWith('.rpm') ||
        asset.browser_download_url.endsWith('.AppImage')) {
      linURLs.push({ name: asset.name, url: asset.browser_download_url })
      return
    }
  })

  return <Releases>{
    winURLs: winURLs,
    macURLs: macURLs,
    linURLs: linURLs,
    sourceURLs: sourceURLs,
    message: 'success',
    error: false
  }
}

const releases = ref(await checkReleases())
</script>

<template>
  <div v-if="!releases.error" id="downloads">
    <div v-show="releases.winURLs.length !== 0">
      <h3>Windows</h3>
      <ul>
        <li v-for="link in releases.winURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div v-show="releases.macURLs.length !== 0">
      <h3>Mac</h3>
      <ul>
        <li v-for="link in releases.macURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div v-show="releases.linURLs.length !== 0">
      <h3>Linux</h3>
      <ul>
        <li v-for="link in releases.linURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div v-show="releases.sourceURLs.length !== 0">
      <h3>Source</h3>
      <ul>
        <li v-for="link in releases.sourceURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
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
