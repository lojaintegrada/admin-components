import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './InformationBoxt.stories'

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle')
describe(specTitle('InformationBox tests'), () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('.InformationBox-title').last().contains('Informação')
  })

  it('Variants', () => {
    mount(<Default type="warning" />)
    cy.get('.InformationBox-icon').should('have.class', 'icon-infoCircle')
    cy.get('.InformationBox').should('have.class', 'bg-warning-light')

    mount(<Default type="danger" />)
    cy.get('.InformationBox-icon').should(
      'have.class',
      'icon-exclamationTriangle'
    )
    cy.get('.InformationBox').should('have.class', 'bg-danger-light')

    mount(<Default type="success" />)
    cy.get('.InformationBox-icon').should('have.class', 'icon-check')
    cy.get('.InformationBox').should('have.class', 'bg-success-light')
  })
})
