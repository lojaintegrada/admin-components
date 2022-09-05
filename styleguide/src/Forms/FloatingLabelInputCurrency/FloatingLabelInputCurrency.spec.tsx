import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './FloatingLabelInputCurrency.stories'

const { Default } = composeStories(stories)

describe('FloatingLabelInputCurrency tests', () => {
  it('Default', () => {
    mount(<Default />)
    const val = '456.88'
    const valMasked = '456,88'
    cy.get('input').type(val).should('have.value', valMasked)
  })
})
