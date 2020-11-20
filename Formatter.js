

  document.getElementById('button').addEventListener("click",function() {
    chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, (tabs) => {
        for (let i = 0; i < tabs.length; i++) {
          moveTabTo(tabs[i], i);
        }
      });
    })
    