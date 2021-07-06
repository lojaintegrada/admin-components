import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Select.stories"

const { Default, Error, WithoutStyle } = composeStories(stories)

describe('Button tests', () => {

  it('Default', () => {
    mount(<Default />)
    const val = '15'

    cy.get('select option').should('have.length', 4)
    cy.get('select').select(val).should('have.value', val)
    cy.get('label.input-label').contains('Meu Select')
    cy.get('div.input-help-text').contains('Texto de ajuda')
  })

  it('Required', () => {
    mount(<Default required />)
    cy.get('select').should('have.attr', 'required')
  })

  it('Error', () => {
    mount(<Error />)
    cy.get('select').should('have.class', 'border-danger')
  })

  it('WithoutStyle', () => {
    mount(<WithoutStyle />)
    cy.get('select').should('not.have.class', 'bg-base-1 border')
  })

})
