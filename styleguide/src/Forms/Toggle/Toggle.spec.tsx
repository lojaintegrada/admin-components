import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './Toggle.stories'

const { Default, Disabled, DisabledChecked } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Toggle tests'), () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('input').should('not.be.checked')
    cy.get('.label').contains('Meu toggle')
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('input').should('not.be.checked')
    cy.get('.label').contains('Meu toggle')
    cy.get('.relative').should('have.class', 'pointer-events-none')
  })

  it('Disabled Checked', () => {
    mount(<DisabledChecked />)
    cy.get('input').should('be.checked')
    cy.get('.label').contains('Meu toggle')
    cy.get('.relative').should('have.class', 'pointer-events-none')
  })
})
