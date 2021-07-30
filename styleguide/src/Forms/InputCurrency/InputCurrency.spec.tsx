import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./InputCurrency.stories"

const { Default, MaxValue, CurrencyUSD } = composeStories(stories)

describe('Input Currency tests', () => {

  it('Default', () => {
    mount(<Default />)
    const val = '456.88'
    const valMasked = '456,88'
    cy.get('input').type(val).should('have.value', valMasked)
    cy.get('label.input-label').contains('Currency Input')
  })

  it('MaxValue', () => {
    mount(<MaxValue />)
    const val = '19.999,99'
    const valMasked = '2.000,00'
    cy.get('input').type(val).should('have.value', valMasked)
  })

  it('CurrencyUSD', () => {
    mount(<CurrencyUSD />)
    const val = '1,234.56'
    cy.get('input').should('have.value', val)
  })

})
