import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Pagination.stories"

const { Default, WithoutItems, WithLengthOptions } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Pagination tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.pagination .pagination-info').within(() => {
      cy.get('.pagination-info-current').contains('2')
      cy.get('.pagination-info-total').contains('123')
    })
    cy.get('.pagination .pagination-nav').within(() => {
      cy.get('.pagination-nav-current').contains('2')
      cy.get('.pagination-nav-total').contains('10')

      let alerted = ''
      cy.on('window:alert', msg => alerted = msg)
      cy.get('.pagination-nav-total').click().then(() => (expect(alerted).to.match(/10/), alerted = ''))
      cy.get('.pagination-nav-previous').click().then(() => (expect(alerted).to.match(/1/), alerted = ''))
      cy.get('.pagination-nav-next').click().then(() => (expect(alerted).to.match(/3/), alerted = ''))
      cy.get('.pagination-nav-current').type('{backspace}{del}6{enter}').then(() => (expect(alerted).to.match(/6/), alerted = ''))
      cy.get('.pagination-nav-current').type('15{enter}').then(() => (expect(alerted).to.match(/10/), alerted = ''))
    })
  })

  it('WithoutItems', () => {
    mount(<WithoutItems />)
    cy.get('.pagination .pagination-info').should('not.be.exist')
    cy.get('.pagination .pagination-nav').should('be.exist')
  })

  it('WithLengthOptions', () => {
    mount(<WithLengthOptions />)
    cy.get('.pagination .pagination-info').within(() => {
      cy.get('select').should('be.exist')
      cy.get('select option').should('have.length', 3)
    })
  })

})
