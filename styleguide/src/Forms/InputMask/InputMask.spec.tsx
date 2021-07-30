import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./InputMask.stories"

const { Default, Date, OnlyNumbers } = composeStories(stories)

describe('Input Mask tests', () => {

  it('Default', () => {
    mount(<Default />)
    const val = '12345678'
    const valMasked = '12345-678'
    cy.get('input').type(val).should('have.value', valMasked)
  })

  it('Date', () => {
    mount(<Date defaultValue="" />)
    const val = '12111990'
    const valMasked = '12/11/1990'
    cy.get('input').type(val).should('have.value', valMasked)
  })

  it('OnlyNumbers', () => {
    mount(<OnlyNumbers />)
    const val = '123abc123ab/gttr[]55'
    const valMasked = '12312355'
    cy.get('input').type(val).should('have.value', valMasked)
  })

})
