import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Status.stories"

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Status tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.indicator-status *').last().contains('Aprovado')
    cy.get('.indicator-status .rounded-full')
  })

  it('Variants', () => {
    mount(<Default type="default" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-inverted-2')

    mount(<Default type="success" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-success')

    mount(<Default type="successDark" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-success-dark')

    mount(<Default type="warning" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-warning')

    mount(<Default type="danger" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-danger')

    mount(<Default type="dangerLight" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-danger-light')
  })

  it('Inverted', () => {
    mount(<Default inverted={true} />)
    cy.get('.indicator-status *').first().contains('Aprovado')
  })

  it('Description', () => {
    mount(<Default description={<strong>Aprovado</strong>} />)
    cy.get('.indicator-status').find('strong').contains('Aprovado')
  })

})
