import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Timeline.stories"

const { Default, WithoutToggle, Loading, Empty } = composeStories(stories)

describe('Timeline tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.timeline .timeline-item')
      .should('have.length', 4)
      .first().within(() => {
        cy.get('.timeline-title').contains('Venda criada')
        cy.get('.timeline-timestamp').contains('11/11/2011')
        cy.get('.timeline-description').should('not.be.visible')
        cy.get('.timeline-title button').click()
        cy.get('.timeline-description').should('be.visible')
      })
  })

  it('Without Toggle', () => {
    mount(<WithoutToggle />)
    cy.get('.timeline .timeline-item')
      .should('have.length', 4)
      .first().within(() => {
        cy.get('.timeline-title').contains('Venda criada')
        cy.get('.timeline-timestamp').contains('11/11/2011')
        cy.get('.timeline-description').should('be.visible')
        cy.get('.timeline-title button').should('not.exist')
      })
  })

  it('Loading', () => {
    mount(<Loading />)
    cy.get('.timeline .timeline-item')
      .should('have.length', 1)
      .find('.animate-pulse')
    cy.get('.timeline .timeline-item .timeline-badge svg').should('have.class', 'icon-loading')
  })

  it('Empty', () => {
    mount(<Empty />)
    cy.get('.timeline .timeline-item')
      .should('have.length', 1)
      .contains('Nenhum registro encontrado')
    cy.get('.timeline .timeline-item .timeline-badge svg').should('have.class', 'icon-ban')
  })

  it('With colors properties on icons', () => {
    mount(<Default/>)
    cy.get('.timeline .timeline-item')
      .should('have.length', 4)
    cy.get('.timeline .timeline-item')
      .last()
      .find('.timeline-badge')
      .should('have.class', 'bg-danger-light')
    cy.get('.timeline .timeline-item')
      .last()
      .find('.timeline-badge svg')
      .should('have.class', 'text-danger')
  })

})
