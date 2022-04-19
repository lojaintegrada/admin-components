import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./TableList.stories"

const { Default, WithLoading, WithEmpty, WithLink } = composeStories(stories)

describe('TableListItem tests', () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.table-list')
      .should('exist')
      .find('.table-list-group')
        .should('have.length', 6)

    cy.get('.table-list .table-list-group')
      .first()
      .find('.table-list-title')
        .should('have.class', 'relative lg:hidden')
        .contains('11 de abril')

    cy.get('.table-list .table-list-group')
      .first()
      .find('.group-items .table-item')
        .should('have.length', 6)
  })

  it('WithLoading', () => {
    mount(<WithLoading />)
    cy.get('.table-list .table-list-loading')
      .should('exist')
      .find('.table-item-loading')
        .should('have.length', 4)
  })

  it('WithEmpty', () => {
    mount(<WithEmpty />)
    cy.get('.table-list .table-list-empty')
      .should('exist')
      .find('.table-list-empty-illustration')
        .should('exist')
        .find('svg')
          .should('exist')
    cy.get('.table-list .table-list-empty')
      .find('.table-list-empty-title')
        .should('exist')
        .contains('Você ainda não fez nenhuma venda conosco')
    cy.get('.table-list .table-list-empty')
      .find('.table-list-empty-subtitle')
        .should('exist')
        .contains('Continua firme, você consegue')
    cy.get('.table-list .table-list-empty')
      .find('.table-list-empty-action')
        .should('exist')
        .contains('Voltar')

    mount(<WithEmpty empty={undefined} />)
    cy.get('.table-list .table-list-empty')
      .should('exist')
      .find('.table-list-empty-illustration')
        .should('not.exist')
    cy.get('.table-list .table-list-empty')
      .find('.table-list-empty-title')
        .should('exist')
        .contains('Nenhum registro encontrado')
    cy.get('.table-list .table-list-empty')
      .find('.table-list-empty-subtitle')
        .should('not.exist')
    cy.get('.table-list .table-list-empty')
      .find('.table-list-empty-action')
        .should('not.exist')
  })

  it('WithLink', () => {
    mount(<WithLink />)
    cy.get('.table-list .table-item')
      .first()
      .find('a.table-item-wrapper')
        .should('exist')
        .should('have.attr', 'href', '#link')
        .should('have.class', 'hover:bg-base-2 before:hover:block')
        .should('have.class', 'after:hover:block')
  })
})
