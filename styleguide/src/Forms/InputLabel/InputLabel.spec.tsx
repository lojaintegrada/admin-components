import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./InputLabel.stories"

const { Default } = composeStories(stories)

describe('Button tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('label')
      .should('have.class', 'input-label')
      .contains('Label')
  })

  it('Error', () => {
    mount(<Default hasError />)
    cy.get('label').should('have.class', 'text-danger')
  })

})
