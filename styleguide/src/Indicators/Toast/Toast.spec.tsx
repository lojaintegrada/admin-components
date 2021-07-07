import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Toast.stories"

const { Default } = composeStories(stories)

describe('Toast tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.Toastify')
    cy.get('button').click()
    cy.get('.Toastify').contains('Aprovado')
  })

})
