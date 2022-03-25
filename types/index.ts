import { World as CucumberWorld } from '@cucumber/cucumber'
import { BrowserContext, Page } from 'playwright'
export interface World extends CucumberWorld {
  context: BrowserContext
  page: Page
  [key: string]: any
}
