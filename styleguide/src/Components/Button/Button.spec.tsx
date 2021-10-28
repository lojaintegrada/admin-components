import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Button.stories"

const { Default, Large, Small, Action, Disabled, Loading, WithLink } = composeStories(stories)

describe('Button tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('button').contains('Default Button').click()
  })

  it('Large', () => {
    mount(<Large />)
    cy.get('button').should('have.class', 'h-14')
  })

  it('Small', () => {
    mount(<Small />)
    cy.get('button').should('have.class', 'h-8')
  })

  it('Action', () => {
    mount(<Action />)
    let alerted = ''
    cy.on('window:alert', msg => alerted = msg)
    cy.get('button').click().then(() => expect(alerted).to.match(/Clicked!/))
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('button').should('be.disabled')
  })

  it('Loading', () => {
    mount(<Loading />)
    cy.get('button').should('have.class', 'bg-base-3')
    cy.get('button svg').should('have.class', 'icon-loading')
  })
  it('WithLink', () => {
    mount(<WithLink />)
    cy.get('a').should('have.attr', 'href').and('include', 'google')
  })

  it('WithIcon', () => {
    mount(<Default icon="edit" />)
    cy.get('button svg').should('have.class', 'icon-edit')
  })

  it('Variants', () => {
    mount(<Default variant="secondary" />)
    cy.get('button').should('have.class', 'bg-secondary')

    mount(<Default variant="tertiary" />)
    cy.get('button').should('have.class', 'bg-inverted-2 text-on-primary')

    mount(<Default variant="info" />)
    cy.get('button').should('have.class', 'bg-secondary-dark text-base-1')

    mount(<Default variant="warning" />)
    cy.get('button').should('have.class', 'bg-warning text-on-base')

    mount(<Default variant="danger" />)
    cy.get('button').should('have.class', 'bg-danger text-base-1')
  })

})
