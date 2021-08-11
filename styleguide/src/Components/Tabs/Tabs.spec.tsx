import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Tabs.stories"

const { Default } = composeStories(stories)

describe('Tabs tests', () => {

  it('Default', () => {
    mount(<Default />)
    let alerted = ''
    cy.on('window:alert', msg => alerted = msg)

    cy.get('.tabs .tabs-item')
      .should('have.length', 4)
      .first().within(() => {
        cy.get('span').contains('Pedidos')
        cy.get('span').should('have.class', 'border-primary')
      })
    cy.get('.tabs .tabs-item').last()
      .click().then(() => expect(alerted).to.match(/vendas/))
    cy.get('.tabs .tabs-item').last()
      .should('have.class', 'tabs-item-active')
      .within(() => {
        cy.get('span').contains('Vendas')
      })
  })

  it('Loading', () => {
    mount(<Default activeItem="cupons" />)
    cy.get('.tabs .tabs-item.tabs-item-active')
      .should('have.length', 1)
      .get('span').contains('Cupons de desconto')
  })

})
