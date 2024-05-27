<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import { ref } from 'vue'

import { checkGitHubReleases } from '@spongex/check-github-releases'

//const GitHubURL = 'https://api.github.com/repos/AtomicSponge/script-tray/releases/latest'
const GitHubURL = 'https://api.github.com/repos/vercel/hyper/releases/latest'

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
