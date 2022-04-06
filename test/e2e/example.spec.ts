import { test, expect } from "@playwright/test"
import { injectAxe, checkA11y } from "axe-playwright"

test.describe("basic example test", () => {
  test("basic test", async ({ page }) => {
    await page.goto("http://localhost:4173/")
    await injectAxe(page)
    await expect(page.locator("text=DigitalService")).toBeVisible()
    await checkA11y(page)
  })
})
