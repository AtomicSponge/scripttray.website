<!--
  Script Tray Website
  Copyright (c) 2024-present Matthew Evans - See LICENSE.md
-->

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import DownloadLinks from './components/DownloadLinks.vue'
import SiteFooter from './components/SiteFooter.vue'

import { ImageZoom } from '@spongex/vue-image-zoom'
</script>

<template>
  <SiteHeader/>
  <section><a id="top"></a>
    <div>
      <strong>Script Tray</strong> is a utility that sits in your system tray and allows you to
      run preconfigured scripts or commands from a click of a button.  Save
      yourself some keystrokes and run all your common commands from here!
    </div>

    <div class="center-img">
      <ImageZoom src="/image/screenshot-traymenu.png" caption="Run commands with a click of a button!" width="280"/>
    </div>

    <div>
      Written in <a href="https://www.electronjs.org/">Electron</a> and
      <a href="https://vuejs.org/">Vue</a>, <strong>Script Tray</strong> is cross
      platform and will run on Windows, Mac or Linux.
    </div>

    <hr/><a id="downloads"></a><h2>Downloads</h2><hr/>
    <!-- Downloads -->
    <Suspense>
      <template #default>
        <DownloadLinks/>
      </template>
      <template #fallback>
        Loading...
      </template>
    </Suspense>
    <!-- End Downloads -->

    <hr/><a id="features"></a><h2>Features</h2><hr/>

    <h3>Settings Menu</h3><hr class="subdiv"/>

    <div class="center-img">
      <ImageZoom src="/image/screenshot-settings.png" caption="Build custom menus within the app!" width="420"/>
    </div>

    <div>
      Fully configurable commands with submenus and separators for organization.
      Also allows for variables to be used within commands.  These will be prompted
      for durring script execution.  The format for these variables is:
      <strong><em>?<| example |></em></strong>
    </div>

    <hr class="subdiv"/><h3>Output Buffer</h3><hr class="subdiv"/>

    <div class="center-img">
      <ImageZoom src="/image/screenshot-buffer.png" caption="See previously ran commands with output styling!" width="420"/>
    </div>

    <div>
      Viewable output buffer with ANSI styling!  Can also be saved to JSON or Log
      file <em>(.log or .txt)</em> from the tray menu.
    </div>

    <hr class="subdiv"/><h3>Job Manager</h3><hr class="subdiv"/>

    <div class="center-img">
      <ImageZoom src="/image/screenshot-jobmgr.png" caption="View running jobs and cancel running or hung scripts!" width="420"/>
    </div>

    <div>
      View running jobs and cancel running or hung scripts.
    </div>
  </section>
  <SiteFooter/>
</template>

<style scoped>
section {
  flex: auto;
  overflow: auto;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
}
h3 {
  padding-left: 16px;
}
hr {
  border: 1px solid rgba(30, 35, 82, 0.75);
}
.subdiv {
  width: 80%;
  margin-left: 8px;
}
.center-img {
  text-align: center;
  padding: 12px;
}
</style>
