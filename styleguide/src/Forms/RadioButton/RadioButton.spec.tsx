import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './RadioButton.stories'

const { Default, Grouped, Disabled } = composeStories(stories)

describe('Toggle tests', () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('input').should('not.be.checked')
    cy.get('.radioLabel').contains('label')
  })

  it('Grouped', () => {
    mount(<Grouped />)
    cy.get('input[type=radio]:checked').should('have.length', 1)
    cy.get('.radioLabel').contains('label')
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('input[type=radio]').should('be.checked')
    cy.get('.checkmark').should('have.class', 'pointer-events-none')
  })
})
