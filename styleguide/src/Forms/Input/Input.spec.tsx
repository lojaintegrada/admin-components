import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Input.stories"

const { Default, Error } = composeStories(stories)

describe('Button tests', () => {

  it('Default', () => {
    mount(<Default />)
    const val = 'Preencher campo'
    cy.get('input').type(val).should('have.value', val)
    cy.get('label.input-label').contains('Meu Campo')
    cy.get('div.input-help-text').contains('Texto de ajuda')
  })

  it('Error', () => {
    mount(<Error />)
    cy.get('input').should('have.class', 'border-danger')
  })

  it('Required', () => {
    mount(<Default required />)
    cy.get('input').should('have.attr', 'required')
  })

  it('Variants', () => {
    mount(<Default variant="default" />)
    cy.get('input').should('have.class', 'h-12')

    mount(<Default variant="small" />)
    cy.get('input').should('have.class', 'h-8')

    mount(<Default variant="large" />)
    cy.get('input').should('have.class', 'h-14')

    mount(<Default variant="xlarge" />)
    cy.get('input').should('have.class', 'h-24')
  })

})
