let color = "#a5c32d";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`default background color set to %c색깔`, `color: ${color}`);
});
