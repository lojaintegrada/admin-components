import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./KnowMore.stories"

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('KnowMore tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('#knowMoreContainer').within(() => {
      cy.get('span').should('have.class', 'text-sm').and('have.class', 'font-semibold').contains('Saiba mais')
    })
  })

})
