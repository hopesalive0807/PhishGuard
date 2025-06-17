chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "checkURL") {
    fetch(`http://localhost:3000/check?url=${encodeURIComponent(message.url)}`)
      .then(res => res.json())
      .then(data => sendResponse({ malicious: data.malicious }))
      .catch(() => sendResponse({ malicious: false }));
    return true;
  }
});
