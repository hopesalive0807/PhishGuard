
# 🛡️ PhishGuard – Real-Time Phishing Detector (Browser Extension)

**PhishGuard** is a real-time phishing and malware detection browser extension powered by the **Google Safe Browsing API**. Designed for both general users and cybersecurity professionals, it actively scans the current tab for threats and alerts the user instantly with an intuitive UI and secure backend.

---

## 🚀 Features

- ✅ **Real-Time URL Scanning** – Instantly checks current tab against phishing/malware blacklists.
- 🔒 **Backend API Integration** – Uses a secure Node.js backend to protect your Google API key.
- 💬 **Clean, Intuitive UI** – Elegant popup design with clear indicators.
- ⚡ **Lightweight & Fast** – Non-intrusive, minimal footprint.
- 🚨 **User Reporting** – Allows manual site reporting (future integration with backend).
- 🧩 **Extendable** – Ready for VirusTotal, OpenPhish, or threat intel APIs.

---

## 🏗️ Project Structure

```bash
phishguard/
│
├── popup.html          # UI template
├── popup.js            # Handles DOM & user interaction
├── background.js       # Connects to backend API
├── css/popup.css       # Popup styling
├── icons/              # Icons in 16px, 48px, 128px
└── manifest.json       # Chrome extension manifest

phishguard-backend/
│
├── server.js           # Express backend using Safe Browsing API
├── .env                # API keys (excluded from version control)
└── package.json        # Backend configuration
```

---

## 🛠️ Installation & Local Setup

### 🔧 Backend Server (Node.js)

1. Clone the repository:
   ```bash
   git clone https://github.com/hopesalive0807/PhishGuard.git
   cd phishguard/phishguard-backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```
   GOOGLE_API_KEY=your_google_safe_browsing_api_key
   ```

4. Start the server:
   ```bash
   npm start
   ```
   The server runs at `http://localhost:3000`.

---

### 🌐 Chrome Extension

1. Open Chrome and go to `chrome://extensions`.
2. Enable **Developer mode** (top right).
3. Click **Load unpacked** and select the `phishguard/` folder.
4. Navigate to any website and click the extension icon to check if it's safe.

---

## 🔐 Security & Privacy

- ✅ No user data is stored or collected.
- ✅ API keys are secured via a backend proxy.
- ✅ URLs are checked temporarily and not logged.

---

## ✨ Optional Feature Ideas

- 🧪 Add [VirusTotal URL Scan](https://developers.virustotal.com/reference/scan-url) integration.
- ⛔ Auto-block sites using `declarativeNetRequest`.
- 📊 Add a dashboard for reported phishing sites.
- 🧭 Add heuristics and local blacklist detection.
- 🌐 Firefox and Microsoft Edge support.

---

## 👨‍💻 Developer Info

**Mahesh Katare**  
CEH v13 | B.Tech in Cybersecurity  
📧 cybermk0807@gmail.com  
🔗[LinkedIn](https://linkedin.com/in/maheshkatare0807)

---

## 📝 License

This project is licensed under the MIT License.  
Feel free to use, share, and modify with attribution.

---

## 🙌 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repo and submit a pull request.
