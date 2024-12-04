# Playwright Cermati

Automation Test testing using [Playwright] that will test  https://www.cermati.com/gabung


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for testing purposes.

### Prerequisites
```


### Installing

First, update npm

```bash
npm install -g npm@10.9.1
```

Then, install SauceDemo

```bash
git clone https://github.com/candradwikusuma/playwright-Cermati.git
cd playwright-Cermati
npm install
```

### Usage

### How to running all
```bash
npx playwright test
```

### How to running per file with show report
```bash
npx playwright test -- tests/register.spec.js show-report
```

### View results

```bash
npx playwright show-report
```