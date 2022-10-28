import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./BoxContent.stories"

const { Content } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('BoxContent tests'), () => {

  it('Default', () => {
    mount(<Content />)
    cy.get('.box')
      .should('have.length', 1)
      .within(() => {
        cy.get('.box-content').contains('Box Content')
      })
  })

})
