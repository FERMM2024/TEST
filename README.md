# Personal Portfolio CI Example

This repository contains a small portfolio web page. A GitHub Actions workflow installs dependencies, runs tests and deploys the site to **GitHub Pages** on every push.

## Project structure

- `src/portfolio.js` – reusable object with personal data
- `tests/` – Node tests validating the data
- `index.html` – page skeleton with Materialize styles
- `src/render.js` – renders the portfolio data on DOMContentLoaded

## Running tests locally

```
npm test
```

The tests check that a base64 photo, phone number and name are present and that there are at least five skills and three projects. GitHub Copilot helped sketch the initial assertions and the workflow file.

## GitHub Actions

The workflow defined in `.github/workflows/ci.yml` uses Node 20, runs `npm ci` and `npm test`, then deploys the repository root to the `gh-pages` branch. The image is embedded as base64 text so no binary files are stored in the repo.

The site will be published automatically at the GitHub Pages URL configured for the repository.
