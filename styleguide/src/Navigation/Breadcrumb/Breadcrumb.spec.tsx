import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Breadcrumb.stories"

const { Default, NoPrevious, WithPrevious, WithPreviousCustom, WithMobileCenter, WithHelp, WithActions } = composeStories(stories)

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

  it('WithMobileCenter', () => {
    mount(<WithMobileCenter />)
    cy.get('.header-navigation .header-navigation-breadcrumb').within(() => {
      cy.get('.header-navigation-current').should('have.class', 'w-full lg:w-auto text-center lg:text-left')
    })
  })

  it('WithHelp', () => {
    mount(<WithHelp />)
    cy.get('.header-navigation .header-navigation-content').within(() => {
      cy.get('.header-navigation-help a').contains('Saiba mais')
      cy.get('.header-navigation-help a svg').should('have.class', 'icon-questionCircle')
    })
  })

  it('WithActions', () => {
    mount(<WithActions />)
    cy.get('.header-navigation .header-navigation-content').within(() => {
      cy.get('.header-navigation-actions').should('have.class', 'flex')
      cy.get('.header-navigation-actions button').should('exist')
    })
  })

  it('WithActionsDisplay', () => {
    mount(<WithActions actionsDisplay="desktop" />)
    cy.get('.header-navigation .header-navigation-content').within(() => {
      cy.get('.header-navigation-actions button').should('have.class', 'hidden lg:flex')
    })
    mount(<WithActions actionsDisplay="mobile" />)
    cy.get('.header-navigation .header-navigation-content').within(() => {
      cy.get('.header-navigation-actions button').should('have.class', 'flex lg:hidden')
    })
  })

})
