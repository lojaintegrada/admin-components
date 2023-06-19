import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './ListActions.stories'

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle')

describe(specTitle('ListActions tests'), () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('.list-actions').should('have.class', 'opacity-100')
    cy.get('.list-actions__button').should('exist')
    cy.get('.remove-selected').should('have.class', 'lg:text-danger-dark')

    let alerted = ''
    cy.on('window:alert', (msg) => (alerted = msg))
    cy.get('.remove-selected')
      .click()
      .then(() => expect(alerted).to.match(/Remove/))
  })
})
