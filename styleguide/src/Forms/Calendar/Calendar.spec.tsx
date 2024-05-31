import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Calendar.stories"

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Calendar tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('#ontem').within(() => {
      cy.get('button').should('have.class', 'text-primary-dark').contains('Ontem')
    })
  })

})
