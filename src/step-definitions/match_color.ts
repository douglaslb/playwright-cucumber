import { Given, Then } from '@cucumber/cucumber'

import { World } from '../../types'

import assert from 'assert'

Given('My color is {string}', async function (this: World, color: string) {
  this.color = color
})

Then('My color should be red', async function (this: World) {
  assert.equal(this.color, 'red')
})
