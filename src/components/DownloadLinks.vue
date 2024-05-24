<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import { ref } from 'vue'

//const GitHubURL = 'https://api.github.com/repos/AtomicSponge/script-tray/releases/latest'
const GitHubURL = 'https://api.github.com/repos/vercel/hyper/releases/latest'

/** Parsed download URLs and their display labels */
interface URLAsset {
  /** Display label for URL */
  name:string
  /** URL for downloading asset */
  url:string
}

/** Object containing parsed URLs and information about the request */
interface Releases {
  /** List of Windows Assets */
  winURLs:Array<URLAsset>
  /** List of Mac Assets */
  macURLs:Array<URLAsset>
  /** List of Linux Assets */
  linURLs:Array<URLAsset>
  /** List of source code assets */
  sourceURLs:Array<URLAsset>
  /** Result message */
  message:string
  /** Error flag */
  error:boolean
}

/**
 * Get the release JSON from the GitHub API
 * Then parse into URLs for each OS
 * @param __GitHubURL__ The GitHub API URL to parse
 * @returns Object containing processed results
 */
const checkGitHubReleases = async (__GitHubURL__:string):Promise<Releases> => {
  const winURLs:Array<URLAsset> = []
  const macURLs:Array<URLAsset> = []
  const linURLs:Array<URLAsset> = []
  const sourceURLs:Array<URLAsset> = []

  const result = await (async () => {
    try {
      const response = await fetch(__GitHubURL__)
      return response.json()
    } catch (error:any) {  //  Catch connection errors
      return <Releases>{
        winURLs: winURLs,
        macURLs: macURLs,
        linURLs: linURLs,
        sourceURLs: sourceURLs,
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
      winURLs: winURLs,
      macURLs: macURLs,
      linURLs: linURLs,
      sourceURLs: sourceURLs,
      message: `
        Unable to locate latest releases!<br/>
        Please try again later.<br/>404: Not Found`,
      error: true
    }
  }
  if (!result.hasOwnProperty('assets')) {  //  Found result, but no assets
    return <Releases>{
      winURLs: winURLs,
      macURLs: macURLs,
      linURLs: linURLs,
      sourceURLs: sourceURLs,
      message: `
        Unable to locate latest releases!<br/>
        Please try again later.<br/>400: Bad Request`,
      error: true
    }
  }

  //  Parse JSON from 'result' and extract URLs
  if (result.tarball_url)
    sourceURLs.push({ name: 'tarball', url: result.tarball_url })
  if (result.zipball_url)
    sourceURLs.push({ name: 'zipball', url: result.zipball_url })

  result.assets.forEach((asset:{name: string, browser_download_url: string}) => {
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

const _releases = ref(await checkGitHubReleases(GitHubURL))
</script>

<template>
  <div v-if="!_releases.error" id="downloads">
    <div v-show="_releases.winURLs.length !== 0">
      <h3>Windows</h3>
      <ul>
        <li v-for="link in _releases.winURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div v-show="_releases.macURLs.length !== 0">
      <h3>Mac</h3>
      <ul>
        <li v-for="link in _releases.macURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div v-show="_releases.linURLs.length !== 0">
      <h3>Linux</h3>
      <ul>
        <li v-for="link in _releases.linURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
    <div v-show="_releases.sourceURLs.length !== 0">
      <h3>Source</h3>
      <ul>
        <li v-for="link in _releases.sourceURLs">
          <a :href="link.url">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </div>
  <!-- Display error if any -->
  <div v-else id="downloads" class="error">
    <span v-html="_releases.message"></span>
  </div>
</template>

<style lang="stylus" scoped>
#downloads
  margin-left 24px
.error
  color rgb(255, 40, 0)
</style>
