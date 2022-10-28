import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./InputHelpText.stories"

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('InputHelpText tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('div.input-help-text')
      .contains('Texto de ajuda')
  })

  it('Error', () => {
    mount(<Default hasError />)
    cy.get('div.input-help-text').should('have.class', 'text-danger')
  })

})
