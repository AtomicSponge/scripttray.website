/// <reference types="vite/client" />

/** Used when parsing GitHub API */
type Asset = {
  browser_download_url: string
}

/** Releases URLs */
type Releases = {
  winURL: string
  macURL: string
  linURLs: Array<string>
  message: string
  error: number
}
