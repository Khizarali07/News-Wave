# News-Wave

News aggregator demo created during the Code With Harry course. The app shows news items in cards, supports simple routing for details and demonstrates fetching data (or using a static list), components decomposition and responsive layout.

## Features

- Display list of news articles
- Article detail pages
- Responsive navigation and layout

## Tech

- React (Create React App)
- Plain CSS

## Environment

- If the project fetches live news from an API, add your API key in `.env.local` (do not commit `.env.local`).

Example `.env.local` (CRA):

```
REACT_APP_NEWS_API_KEY=your_api_key_here
```

## Run locally

```powershell
npm install
npm start
```

## Notes

- Static content is available in `text.txt` and components live under `src/Component`.
- To deploy, build and host the `build/` output on any static host.

---
