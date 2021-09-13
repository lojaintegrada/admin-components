import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './Checkbox.stories'

const { Default, Disabled, DisabledChecked } = composeStories(stories)

describe('Checkbox tests', () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('.input-label').contains('Meu checkbox')
    cy.get('input').should('have.attr', 'type', 'checkbox')
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('input').should('have.attr', 'disabled')
  })

  it('Disabled checked', () => {
    mount(<DisabledChecked />)
    cy.get('input').should('have.attr', 'disabled')
    cy.get('input').should('be.checked')
  })
})
