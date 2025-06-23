// @ts-check
import { defineConfig, devices, expect } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testDir: './tests',
  /* Global timeout */
  timeout: 50 * 1000,
  // Assertions timeout
  expect: {
    timeout: 10000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'webkit',
    headless: true,
    screenshot: 'on',
    trace: 'retain-on-failure',
  },

  /* Configure projects for major browsers 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],*/
});

export default config; // expose the configuration for the entire project

