// test.setup.ts
import { Before, BeforeAll, AfterAll, After } from '@cucumber/cucumber'
import { devices, chromium } from '@playwright/test'
import { OurWorld } from './types'

BeforeAll(async function () {
  //@ts-ignore
  global.browser = await chromium.launch({
    timeout: 30000,
    headless: false,
  })
})

AfterAll(async function () {
  //@ts-ignore
  await global.browser.close()
})

Before(async function (this: OurWorld) {
  const pixel2 = devices['Desktop Chrome']
  //@ts-ignore
  this.context = await global.browser.newContext({
    viewport: pixel2.viewport,
    userAgent: pixel2.userAgent,
  })
  this.page = await this.context.newPage()
})

After(async function (this: OurWorld) {
  await this.page.close()
  await this.context.close()
})
