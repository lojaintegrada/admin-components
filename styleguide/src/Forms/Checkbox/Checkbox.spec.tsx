import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './Checkbox.stories'

const { Default, Disabled, DisabledChecked } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Checkbox tests'), () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('.input-label').contains('Li e aceito os termos de uso.')
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
