# kgl-ai

Project Documentation
md
Copy
Edit
# KGL AI Chatbot

A simple chatbot interface in Kinyarwanda built with React and Vite.

## 🚀 Setup Instructions

1. Clone this repository:
   ```sh
   git clone https://github.com/your-username/kgl-ai.git
   cd kgl-ai
Install dependencies:

sh
Copy
Edit
npm install
Start the development server:

sh
Copy
Edit
npm run dev
Deploy to GitHub Pages:

sh
Copy
Edit
npm run deploy
📌 Features
Simple chatbot UI
Built with React & Tailwind CSS
Auto-deploy via GitHub Pages
📄 License
MIT

yaml
Copy
Edit

---

### 9️⃣ **`.github/workflows/deploy.yml`** (GitHub Actions for Auto Deployment)
```yaml
name: Deploy React to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install Dependencies
        run: npm install
      - name: Build Project
        run: npm run build
      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: dist
🎯 Next Steps
✅ Upload this to GitHub
✅ Enable GitHub Pages (Settings > Pages > Select "gh-pages" branch)
✅ Run npm run deploy
