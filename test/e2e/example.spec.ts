import { expect, test } from "@playwright/test"

test("basic test", async ({ page }) => {
  await page.goto("http://localhost:4173/")
  await expect(page.locator("text=DigitalService")).toBeVisible()
})
