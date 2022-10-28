import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './FloatingLabelInputCurrency.stories'
const specTitle = require('cypress-sonarqube-reporter/specTitle');

const { Default } = composeStories(stories)

describe(specTitle('FloatingLabelInputCurrency tests'), () => {
  it('Default', () => {
    mount(<Default />)
    const val = '456.88'
    const valMasked = '456,88'
    cy.get('input').type(val).should('have.value', valMasked)
  })
})
