import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Select.stories"

const { Default, Error, WithoutStyle, Disabled } = composeStories(stories)

describe('Select tests', () => {

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

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('select').should('have.class', '!bg-base-3 !pointer-events-none !text-on-base-2')
  })

})
