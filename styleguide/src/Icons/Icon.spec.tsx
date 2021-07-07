import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Icon.stories"

const { Example } = composeStories(stories)

describe('Icon tests', () => {

  it('Default', () => {
    mount(<Example icon="edit" />)
    cy.get('svg path')
    cy.get('svg').should('have.class', 'icon-edit')
  })

  it('Block', () => {
    mount(<Example block />)
    cy.get('svg').should('have.class', 'block')
  })

  it('Size', () => {
    mount(<Example size={10} />)
    cy.get('svg').should('have.class', 'h-10 w-10')
  })

})
