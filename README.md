# Setup Guide


## 1. Install Cypress

If you don’t already have Cypress installed:

```bash
npm install --save-dev cypress
```
This will install Cypress.io as a development dependency.

## 2. Open Cypress
Initialize Cypress in your project:

```bash
npx cypress open
```
or run in headless mode:

```bash
npx cypress run
```
## 3. Setup Cypress Cloud for AI-powered prompts
To use AI-powered features and advanced reports, connect your project to Cypress Cloud.

### Step 1: Create a Cypress Cloud Project
Go to https://cloud.cypress.io

Sign in with GitHub, GitLab, or your preferred provider

Create a new project

Copy the generated Project ID

### Step 2: Add Project ID to Cypress Config
In your cypress.config.js:
```bash
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'your-project-id',
  e2e: {
    setupNodeEvents(on, config) {
      return config
    },
  },
})
```
### Step 3: Add CYPRESS_RECORD_KEY to repository secrets in GitHub, GitLab, or your preferred provider

### Step 4: Record Tests to Cypress Cloud
Run tests in record mode:

```bash
npx cypress run --record --key YOUR_RECORD_KEY
```
You can find your Record Key in Cypress Cloud project settings.
