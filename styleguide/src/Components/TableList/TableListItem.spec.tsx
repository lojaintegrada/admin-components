import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./TableListItem.stories"

const { Item } = composeStories(stories)

describe('TableListItem tests', () => {

  it('Default', () => {
    mount(<Item />)
    cy.get('.table-item')
      .should('exist')
      .should('not.have.class', 'lg:first:border-t')
      .find('.table-item-wrapper')
        .should('exist')
    cy.get('.table-item .table-item-icon')
      .should('exist')
      .find('.table-item-icon-background')
        .should('have.class', 'w-8')
        .should('have.class', 'bg-warning-light')
        .find('svg')
          .should('exist')
    cy.get('.table-item .table-item-content')
      .find('.table-item-title')
        .should('exist')
        .contains('devolvida')
    cy.get('.table-item .table-item-content')
      .find('.table-item-description')
        .should('exist')
        .contains('Cartão')
    cy.get('.table-item .table-item-timestamp .table-item-timestamp-time')
      .should('exist')
      .contains('19:45')
    cy.get('.table-item .table-item-timestamp .table-item-timestamp-date')
      .should('exist')
      .contains('dezembro')
  })

  it('Force Border Desktop', () => {
    mount(<Item forceBorderDesktop={true} />)
    cy.get('.table-item')
      .should('have.class', 'lg:first:border-t')
  })

  it('Without', () => {
    mount(<Item withIcon={undefined} />)
    cy.get('.table-item .table-item-icon')
      .should('not.exist')

    mount(<Item description={undefined} />)
    cy.get('.table-item .table-item-description')
      .should('not.exist')

    mount(<Item timestampDate={undefined} />)
    cy.get('.table-item .table-item-timestamp-date')
      .should('not.exist')

    mount(<Item timestampTime={undefined} />)
    cy.get('.table-item .table-item-timestamp-time')
      .should('not.exist')
  })

})
