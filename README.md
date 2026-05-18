# JLPT N5 Mastery Hub

![JLPT N5 Mastery Hub](https://img.shields.io/badge/Status-Completed-success.svg) ![Offline Capable](https://img.shields.io/badge/PWA-Offline_Ready-blue.svg)

A comprehensive, zero-dependency, and fully offline-capable web application designed to help Japanese language learners master the JLPT N5 curriculum. Built with vanilla HTML, CSS, and JavaScript, it features a gamified, modern aesthetic with robust local storage management to ensure your progress is always safe.

## 🚀 Features

*   **Dashboard & Daily Lessons**: A guided 30-day curriculum with daily kanji, vocabulary, and grammar targets. Tracks your daily study streak and learning momentum.
*   **Spaced Repetition System (SRS)**: An intelligent review system that spaces out reviews based on your performance, ensuring long-term memory retention.
*   **Comprehensive Data Banks**:
    *   **漢字 Kanji Bank**: Master stroke orders, meanings, and on/kun readings with an interactive grid.
    *   **語彙 Vocabulary**: Searchable vocabulary list organized by category, with audio pronunciation (TTS).
    *   **文法 Grammar**: Explanations and example sentences for all essential N5 grammar points.
    *   **助詞 Particles**: Deep dives into the structural particles of Japanese.
*   **Practice Drills & Mock Exams**:
    *   **Verb Conjugation**: Drill your Masu, Te, Nai, and Ta forms.
    *   **Quick Quizzes**: Auto-generated 10-question quizzes across multiple categories.
    *   **Mock Exam**: A timed, 15-minute 60-question mock exam to test your overall readiness.
*   **Offline-Ready PWA**: Installable as a Progressive Web App (PWA). Works seamlessly without an internet connection using Service Workers.
*   **No Databases or Backends**: 100% of your progress is saved securely in your browser's `localStorage`. You can import/export your save files anytime.

## 🛠️ Technologies Used

*   **HTML5 & CSS3**: Custom modern styling with a sleek dark mode and responsive layout. No external UI frameworks (like Bootstrap or Tailwind) were used.
*   **Vanilla JavaScript**: Lightweight, modular codebase without dependencies like React or Vue. 
*   **Service Workers**: Enables offline caching of all assets so you can study anywhere, anytime.
*   **Web Speech API**: Uses built-in browser Text-to-Speech (TTS) for native pronunciation.

## 📥 Installation & Usage

You can deploy this instantly to GitHub Pages or any static web host, or simply run it locally.

### Running Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/jlpt-n5-mastery-hub.git
   ```
2. Open `index.html` in your favorite web browser. 
   *(Note: For the Service Worker to register correctly locally, it's recommended to serve the folder using a local web server like `npx serve` or VS Code Live Server).*

### 🌐 How Others Can See & Use Your App (GitHub Pages)
The easiest way to share your app is by hosting it for free on GitHub Pages. Once deployed, anyone with the link can use it directly in their browser without downloading anything!

**Steps to deploy:**
1. Create a new repository on GitHub and push all your files (excluding `node_modules`).
2. Go to your repository **Settings** -> **Pages**.
3. Under "Source", select the `main` branch and click **Save**.
4. In a few minutes, GitHub will give you a live link (e.g., `https://yourusername.github.io/jlpt-n5/`).

**How people use it:**
* **Share the Link:** Just send the GitHub Pages link to anyone. They can open it on their phone, tablet, or desktop browser.
* **Install as an App (PWA):** Because this is a Progressive Web App, when someone opens the link on their phone (Safari/Chrome), they will see an option to **"Add to Home Screen"**. This installs it like a native app!
* **Offline Use:** Once they open the site for the first time, it will automatically download the necessary files. They can then use the app entirely offline.

## 💾 Progress Backup
Since all data is stored locally in your browser, it is highly recommended to use the **Export Progress** feature in the sidebar to download your `.json` save file periodically. You can use the **Import Progress** button to restore your data on a different device or browser.

## 📄 License
This project is open-source and free to use for personal study. Data points (Kanji, Vocab, Grammar) are sourced from open JLPT resources.
