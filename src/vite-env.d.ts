/// <reference types="vite/client" />

/** Used when parsing GitHub API */
type Asset = {
  browser_download_url: string
}

/** Releases URLs */
type Releases = {
  winURLs: Array<string>
  macURLs: Array<string>
  linURLs: Array<string>
  message: string
  error: number
}
