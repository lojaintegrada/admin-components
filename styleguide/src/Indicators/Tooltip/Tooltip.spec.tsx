import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Tooltip.stories"

const { Default } = composeStories(stories)

describe('Tooltip tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('[data-tippy-root]').should('not.exist');
    cy.get('a').trigger('mouseenter')
    cy.get('[data-tippy-root]').contains('I am a tooltip!')
  })

})
