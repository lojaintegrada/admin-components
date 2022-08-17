import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './InputMask.stories'

const {
  Default,
  Date,
  OnlyNumbers,
  ZipCode,
  Nfe,
  Phone,
  Cellphone,
  PhoneOrCellphone,
} = composeStories(stories)

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

  it('ZipCode', () => {
    mount(<ZipCode />)
    const val = '21310310'
    const valMasked = '21310-310'
    cy.get('input').type(val).should('have.value', valMasked)
  })

  it('Nfe', () => {
    mount(<Nfe />)
    const val = '32191105570714000825550010059146621133082968'
    const valMasked = '3219 1105 5707 1400 0825 5500 1005 9146 6211 3308 2968'
    cy.get('input').type(val).should('have.value', valMasked)
  })

  it('Phone', () => {
    mount(<Phone />)
    const val = '2139774179'
    const valMasked = '(21) 3977-4179'
    cy.get('input').type(val).should('have.value', valMasked)
  })

  it('Cellphone', () => {
    mount(<Cellphone />)
    const val = '21970100616'
    const valMasked = '(21) 97010-0616'
    cy.get('input').type(val).should('have.value', valMasked)
  })

  it('PhoneOrCellphone - Phone', () => {
    mount(<PhoneOrCellphone />)
    const val = '2139774179'
    const valMasked = '(21) 3977-4179'
    cy.get('input').clear().type(val).should('have.value', valMasked)
  })

  it('PhoneOrCellphone - Cellphone', () => {
    mount(<PhoneOrCellphone />)
    const val = '21901234567'
    const valMasked = '(21) 90123-4567'
    cy.get('input').clear().type(val).should('have.value', valMasked)
  })
})
