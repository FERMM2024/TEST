# Personal Portfolio CI Example

This repository contains a very small portfolio web page along with a workflow
that runs unit tests and deploys the site to **GitHub Pages**. All portfolio data
is stored in `portfolio.js` so the page and the tests share the same source.

## Running tests locally

The project uses Node's built in test runner. Execute:

```bash
npm test
```

The tests verify that personal information is present and that there are at
least five skills and three projects. GitHub Copilot suggested the basic
structure of these assertions which were then adapted to the built in `node:test`
module.

## GitHub Actions

The workflow in `.github/workflows/ci.yml` installs Node, runs the tests, and
publishes the root directory to GitHub Pages on every push.
