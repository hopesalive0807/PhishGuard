document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    chrome.runtime.sendMessage({ action: "checkURL", url: url }, (response) => {
      const status = document.getElementById('status');
      if (response.malicious) {
        status.textContent = '⚠️ Threat detected (Google Safe Browsing)';
        status.style.color = 'red';
      } else {
        status.textContent = '✅ This site appears safe.';
        status.style.color = 'green';
      }
    });
  });

  document.getElementById('reportBtn').addEventListener('click', () => {
    alert('Thank you for reporting this site!');
  });
});
