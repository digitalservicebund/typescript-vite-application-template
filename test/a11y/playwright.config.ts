import { devices, PlaywrightTestConfig } from "@playwright/test"

// Use a different port (from the one used with E2E tests) to workaround problem in CI/GitHub Actions,
// starting to occur with playwright/test 1.28.0:
// Error: http://localhost:4173 is already used ...
// See https://github.com/digitalservicebund/typescript-vite-application-template/actions/runs/3486985178/jobs/5834089375
const port = 4174

const config: PlaywrightTestConfig = {
  testDir: ".",
  timeout: 10000,
  retries: process.env.CI === "true" ? 1 : 0,
  use: {
    viewport: { width: 1280, height: 720 },
    acceptDownloads: true,
    baseURL: `http://localhost:${port}`,
    screenshot: "only-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
  ],
  webServer: {
    command: `npm run serve -- --port ${port}`,
    port: port,
    timeout: parseInt(process.env.WAIT_ON_TIMEOUT) || 20 * 1000,
  },
}

export default config
