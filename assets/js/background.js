// when the extension is installed for the first time, set default values

chrome.runtime.onInstalled.addListene(() => {
  chrome.storage.sync.set({
    toggleSitesActive: false,
    toggleSitesList: 'example.com'
  }, () => {})
})