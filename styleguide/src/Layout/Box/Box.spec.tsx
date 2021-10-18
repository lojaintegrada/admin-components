import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Box.stories"

const { Default, WithAction, WithTabs, WithToggle, OnlyTabs } = composeStories(stories)

describe('Box tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.box')
      .should('have.length', 1)
      .within(() => {
        cy.get('.box-header .box-header-title').should('exist')
        cy.get('.box-header h3').contains('Box Title')
        cy.get('.box-header h4').contains('Box SubTitle')
        cy.get('.box-header .indicator-status').contains('Some status')
        cy.get('.tabs button').should('have.length', 3)
        cy.get('.box-content').contains('Box Content')
        cy.get('.box-content').should('have.class', 'lg:p-10')
      })
  })

  it('Small', () => {
    mount(<Default variant="small" />)
    cy.get('.box .box-content').should('not.have.class', 'lg:p-10')
  })

  it('WithAction', () => {
    mount(<WithAction />)
    cy.get('.box .box-header .indicator-status')
      .should('have.length', 1)
      .contains('Some status')
      .get('.rounded-full').should('have.class', 'bg-success')
    cy.get('.box .tabs').should('not.exist')
  })

  it('WithToggle', () => {
    mount(<WithToggle />)
    cy.get('.box .box-header .box-toggle')
      .should('have.length', 1)
      .parents('.box-header').trigger('click')
    cy.get('.box')
      .should('have.attr', 'data-opened', 'false')
      .get('.box-header')
      .trigger('click')
    cy.get('.box')
      .should('have.attr', 'data-opened', 'true')
    cy.get('.box .tabs').should('not.exist')
  })

  it('WithTabs', () => {
    mount(<WithTabs />)
    cy.get('.box .tabs')
      .should('have.length', 1)
      .get('button')
      .should('have.length', 3)
    cy.get('.box .box-header .indicator-status').should('not.exist')
  })

  it('OnlyTabs', () => {
    mount(<OnlyTabs />)
    cy.get('.box .tabs')
      .should('have.length', 1)
      .get('button')
      .should('have.length', 3)
    cy.get('.box .box-header .box-header-title').should('not.exist')
    cy.get('.box .box-header .indicator-status').should('not.exist')
  })

})
