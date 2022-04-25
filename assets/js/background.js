// when the extension is installed for the first time, set default values

chrome.runtime.onInstalled.addListene(() => {
  chrome.storage.sync.set({
    toggleSitesActive: false,
    toggleSitesList: 'example.com'
  }, () => {})
})

// set up the initial chrome storage values
let toggleSitesActive = false
let toggleSitesList = 'example.com'

// replace the initial values above with ondes from synced storage
chrome.storage.sync.get([
  'toggleSitesActive',
  'toggleSitesList'
], (result) => {
  toggleSitesActive = result.toggleSitesActive
  toggleSitesList = result.toggleSitesList
})




