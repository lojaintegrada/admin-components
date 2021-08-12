import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./BoxSeparator.stories"

const { Separator } = composeStories(stories)

describe('BoxSeparator tests', () => {

  it('Default', () => {
    mount(<Separator />)
    cy.get('.box')
      .should('have.length', 1)
      .within(() => {
        cy.get('.box-content hr.box-content-separator').should('exist')
      })
  })

})
