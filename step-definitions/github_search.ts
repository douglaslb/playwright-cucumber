import { Given, When, Then } from '@cucumber/cucumber'

import { OurWorld } from '../types'

import axios from 'axios'

import { expect } from '@playwright/test'

Given('I open GitHub website', async function (this: OurWorld) {
  await this.page.goto('https://github.com/')
})

When(
  'I search for douglaslb user and click enter',
  async function (this: OurWorld) {
    await this.page.locator('[placeholder="Search GitHub"]').type('douglaslb')
    await this.page.keyboard.press('Enter')
  }
)

When('I click on users tab', async function (this: OurWorld) {
  await this.page.locator('a:has-text("Users") >> nth=0').click()
})

When('I click on Douglas Lima name', async function (this: OurWorld) {
  await this.page.locator('text=Douglas Lima').click()
})

Then(
  'I make an axios request to validate the username',
  async function (this: OurWorld) {
    const { data } = await axios.get('https://api.github.com/users/douglaslb')

    await expect(this.page.locator('.p-nickname')).toHaveText(data.login)
  }
)
