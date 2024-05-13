/**
 * Script Tray Website
 * Copyright (c) 2024-present Matthew Evans - See LICENSE.md
 */

const githubURL = 'https://api.github.com/repos/AtomicSponge/script_tray/releases/latest'

/**
 * Get the release JSON from the GitHub API
 * Then parse into URLs for each OS
 * @returns Object containing processed results.
 */
export const checkReleases = async () => {
  const result = await (async () => {
    try {
      const response = await fetch(githubURL)
      return response.json()
    } catch (e) {  //  Catch connection errors
      return <Releases>{
        message: `Unable to locate latest release!  Please try again later.\n${e}`,
        error: 1
      }
    }
  })()
  if(result.error) return result  //  IIFE resulted in error, return
  if(result.message === 'Not Found') {  //  Github repo not found
    return <Releases>{
      message: `Unable to locate latest release!  Please try again later.\n404: Not Found`,
      error: 1
    }
  }

  let winURL = 'invalid'
  let macURL = 'invalid'
  let linURLs = [ 'invalid' ]

  //  Parse JSON from 'result' and extract URLs
  //  This assumes one of each installer type
  result.assets.forEach((asset:Asset) => {
    if(asset.browser_download_url.endsWith('.exe'))
      winURL = asset.browser_download_url
    else if(asset.browser_download_url.endsWith('.dmg'))
      macURL = asset.browser_download_url
    else
      linURLs.push(asset.browser_download_url)
  })

  return <Releases>{
    winURL: winURL,
    macURL: macURL,
    linURLs: linURLs,
    error: 0
  }
}
