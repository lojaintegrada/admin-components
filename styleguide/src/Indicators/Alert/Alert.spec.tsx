import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Alert.stories"

const { Default } = composeStories(stories)

describe('Alert tests', () => {

  it('Default', () => {
    const text = 'Example text'
    mount(<Default content={text} />)
    cy.get('.alert').contains(text)
  })

  it('Variants', () => {
    mount(<Default type="success" />)
    cy.get('.alert').should('have.class', 'bg-success-light')

    mount(<Default type="warning" />)
    cy.get('.alert').should('have.class', 'bg-warning-light')

    mount(<Default type="danger" />)
    cy.get('.alert').should('have.class', 'bg-danger-light')
  })

})
