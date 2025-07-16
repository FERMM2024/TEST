# Personal Portfolio CI Example

This repository demonstrates a simple portfolio with automated tests and a GitHub Actions pipeline that deploys the static page to **GitHub Pages**. The portfolio data is defined in `portfolio.js` and reused both for the tests and for rendering the HTML.

## Running tests locally

```bash
node test.js
```

The tests validate that personal information, skills, and projects meet the required counts. They were generated with help from GitHub Copilot which suggested the basic `assert` structure.

## GitHub Actions

The workflow defined in `.github/workflows/ci.yml` installs nothing, runs the tests using Node, and publishes the repository to GitHub Pages on every push.

## Notes on AI assistance

Copilot helped draft the test cases and the workflow file. The suggestions were adapted to this simplified setup without external packages.
