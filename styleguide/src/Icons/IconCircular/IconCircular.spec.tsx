import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./IconCircular.stories"

const { Default } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('IconCircular tests'), () => {

  it('Default', () => {
    mount(<Default variant="success" />)
    cy.get('.icon-circular').should('have.class', 'bg-success')
    cy.get('svg path')
    cy.get('svg').should('have.class', 'icon-check')
  })

  it('CustomIconAndBackground', () => {
    mount(<Default icon="camera" bgClass="bg-[#d380ec]" />)
    cy.get('.icon-circular').should('have.class', 'bg-[#d380ec]')
    cy.get('svg').should('have.class', 'icon-camera')
  })
})
