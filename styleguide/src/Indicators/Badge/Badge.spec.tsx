import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Badge.stories"

const { Default, Small, Expanded } = composeStories(stories)
const badgeClass = '.badge'

describe('Badge tests', () => {

  it('Default', () => {
    const text = 'Example text'
    mount(<Default text={text} />)
    cy.get(badgeClass).contains(text)
  })

  it('Small', () => {
    mount(<Small />)
    cy.get(badgeClass).should('have.class', 'px-1.5')
  })

  it('Expanded', () => {
    mount(<Expanded />)
    cy.get(badgeClass).should('have.class', 'w-full')
  })

  it('Variants', () => {
    mount(<Default type="neutral" />)
    cy.get(badgeClass).should('have.class', 'bg-inverted-2')

    mount(<Default type="primary" />)
    cy.get(badgeClass).should('have.class', 'bg-primary-dark')

    mount(<Default type="success" />)
    cy.get(badgeClass).should('have.class', 'bg-success-dark')

    mount(<Default type="warning" />)
    cy.get(badgeClass).should('have.class', 'bg-warning-dark')

    mount(<Default type="danger" />)
    cy.get(badgeClass).should('have.class', 'bg-danger-dark')
  })
})
