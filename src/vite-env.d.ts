/// <reference types="vite/client" />

/** Used when parsing GitHub API */
type Asset = {
  name: string
  browser_download_url: string
}

/** URL and its title for releases */
type URLAsset = {
  name: string
  url: string
}

/** Releases URLs */
type Releases = {
  winURLs: Array<URLAsset>
  macURLs: Array<URLAsset>
  linURLs: Array<URLAsset>
  message: string
  error: boolean
}
