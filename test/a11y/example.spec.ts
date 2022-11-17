import { test } from "@playwright/test"
import { injectAxe, checkA11y } from "axe-playwright"

test.describe("basic example a11y test", () => {
  test("test start page", async ({ page }) => {
    await page.goto("/")
    await injectAxe(page)
    await checkA11y(page)
  })
})
