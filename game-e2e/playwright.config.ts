import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  reporter: 'html',
  fullyParallel: true,
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
})
