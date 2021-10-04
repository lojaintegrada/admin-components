import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./InputLabel.stories"

const { Default, WithComplement } = composeStories(stories)

describe('InputLabel tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('label')
      .should('have.class', 'input-label')
      .contains('Label')
  })

  it('Error', () => {
    mount(<Default hasError required />)
    cy.get('label')
      .should('have.class', 'text-danger')
      .contains('Label*')
  })

  it('WithComplement', () => {
    mount(<WithComplement />)
    cy.get('label .ml-2 svg').should('exist')
  })

})
