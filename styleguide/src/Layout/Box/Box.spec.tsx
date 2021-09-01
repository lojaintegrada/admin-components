import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Box.stories"

const { Default, WithAction, WithTabs, OnlyTabs } = composeStories(stories)

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
        cy.get('.box-header .tabs button').should('have.length', 3)
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
    cy.get('.box .box-header .tabs').should('not.exist')
  })

  it('WithTabs', () => {
    mount(<WithTabs />)
    cy.get('.box .box-header .tabs')
      .should('have.length', 1)
      .get('button')
      .should('have.length', 3)
    cy.get('.box .box-header .indicator-status').should('not.exist')
  })

  it('OnlyTabs', () => {
    mount(<OnlyTabs />)
    cy.get('.box .box-header .tabs')
      .should('have.length', 1)
      .get('button')
      .should('have.length', 3)
    cy.get('.box .box-header .box-header-title').should('not.exist')
    cy.get('.box .box-header .indicator-status').should('not.exist')
  })

})