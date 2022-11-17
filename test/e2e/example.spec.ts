import { test, expect } from "@playwright/test"

test.describe("basic example test", () => {
  test("basic test", async ({ page }, { config }) => {
    await page.goto(`http://localhost:${config.webServer?.port}`)
    await expect(page.locator("text=DigitalService")).toBeVisible()
  })
})
