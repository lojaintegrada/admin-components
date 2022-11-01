import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Tag.stories"

const { Default, WithAction } = composeStories(stories)
const tagClass = '.tag'

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Tag tests'), () => {

  it('Default', () => {
    const text = 'Example text'
    mount(<Default content={text} />)
    cy.get(tagClass).contains(text)
  })

  it('WithAction', () => {
    mount(<WithAction />)
    cy.get(tagClass).find('svg.icon-timesCircle').should('exist')
  })

  it('Variants', () => {
    mount(<Default type="neutral" />)
    cy.get(tagClass).should('have.class', 'bg-base-1')

    mount(<Default type="primary" />)
    cy.get(tagClass).should('have.class', 'bg-primary-light')

    mount(<Default type="success" />)
    cy.get(tagClass).should('have.class', 'bg-success-light')

    mount(<Default type="warning" />)
    cy.get(tagClass).should('have.class', 'bg-warning-light')

    mount(<Default type="danger" />)
    cy.get(tagClass).should('have.class', 'bg-danger-light')
  })
})
