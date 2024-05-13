/**
 * Script Tray Website
 * Copyright (c) 2024-present Matthew Evans - See LICENSE.md
 */

/**
 * Download a file
 * @param url File URL to download
 */
export const downloadFile = (url:string) => {
  Object.assign(document.createElement('a'), {
    href: url
  }).click()
}
