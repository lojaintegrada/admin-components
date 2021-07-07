import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Status.stories"

const { Default } = composeStories(stories)

describe('Status tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.indicator-status').contains('Aprovado')
    cy.get('.indicator-status .rounded-full')
  })

  it('Variants', () => {
    mount(<Default type="success" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-success')

    mount(<Default type="warning" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-warning')

    mount(<Default type="danger" />)
    cy.get('.indicator-status').find('.rounded-full').should('have.class', 'bg-danger')
  })

})
