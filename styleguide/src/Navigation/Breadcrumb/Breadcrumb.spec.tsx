import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Breadcrumb.stories"

const { Default, NoPrevious, WithPrevious, WithPreviousCustom } = composeStories(stories)

describe('Breadcrumb tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.header-navigation .header-navigation-breadcrumb').within(() => {
      cy.get('.header-navigation-previous').contains('Página anterior')
      cy.get('.header-navigation-current').contains('Página atual')
    })
  })

  it('NoPrevious', () => {
    mount(<NoPrevious />)
    cy.get('.header-navigation .header-navigation-breadcrumb').within(() => {
      cy.get('.header-navigation-previous').should('not.exist')
      cy.get('.header-navigation-current').contains('Página atual')
    })
  })

  it('WithPrevious', () => {
    mount(<WithPrevious />)
    cy.get('.header-navigation .header-navigation-breadcrumb').within(() => {
      cy.get('.header-navigation-previous a').should('have.attr', 'href').and('include', 'google')
    })
  })

  it('WithPreviousCustom', () => {
    mount(<WithPreviousCustom />)
    cy.get('.header-navigation .header-navigation-breadcrumb').within(() => {
      cy.get('.header-navigation-previous a').should('have.class', 'underline')
    })
  })

})
