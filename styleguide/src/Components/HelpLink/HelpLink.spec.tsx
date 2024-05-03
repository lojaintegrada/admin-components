import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./HelpLink.stories"

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('HelpLink tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('#helpLinkContainer').within(() => {
      cy.get('span').should('have.class', 'text-sm').and('have.class', 'font-semibold').contains('Saiba mais')
    })
  })

})
