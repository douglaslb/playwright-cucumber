/// <reference path="global.d.ts" />

import { Before, BeforeAll, AfterAll, After } from '@cucumber/cucumber'
import { devices, chromium } from '@playwright/test'
import { World } from './types'

BeforeAll(async function () {
  global.browser = await chromium.launch({
    timeout: 30000,
    headless: false,
  })
})

AfterAll(async function () {
  await global.browser.close()
})

Before(async function (this: World) {
  const pixel2 = devices['Desktop Chrome']
  this.context = await global.browser.newContext({
    viewport: pixel2.viewport,
    userAgent: pixel2.userAgent,
  })
  this.page = await this.context.newPage()
})

After(async function (this: World) {
  await this.page.close()
  await this.context.close()
})
