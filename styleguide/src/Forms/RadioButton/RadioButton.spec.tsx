import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './RadioButton.stories'

const { Default, Focus, FocusChecked, Disabled } = composeStories(stories)

describe('Toggle tests', () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('input').should('not.be.checked')
    cy.get('.radioLabel').contains('label')
  })

  it('Focus', () => {
    mount(<Focus />)
    cy.get('input').should('not.be.checked')
    cy.get('.radioLabel').contains('label')
    cy.get('label').should('have.class', 'border-focus')
  })

  it('FocusChecked', () => {
    mount(<FocusChecked />)
    cy.get('input[type=radio]').should('be.checked')
    cy.get('.radioLabel').contains('label')
    cy.get('label').should('have.class', 'border-focus')
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('input[type=radio]').should('be.checked')
    cy.get('.checkmark').should('have.class', 'pointer-events-none')
  })
})
