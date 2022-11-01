import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./BoxHeader.stories"

const { Header } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('BoxHeader tests'), () => {

  it('Default', () => {
    mount(<Header />)
    cy.get('.box .box-header')
      .should('have.length', 1)
      .within(() => {
        cy.get('.box-header-title').should('exist')
        cy.get('h3').contains('Box Title')
        cy.get('h4').contains('Box SubTitle')
      })
  })

})
