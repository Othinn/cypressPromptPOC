const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3dmupy",
  e2e: {
    experimentalPromptCommand: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
