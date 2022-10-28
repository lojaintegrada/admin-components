import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./SidebarFixed.stories"
const specTitle = require('cypress-sonarqube-reporter/specTitle');

const { Default } = composeStories(stories)

describe(specTitle('SidebarFixed tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('.sidebar-fixed')
      .should('exist')
      .should('have.class', 'opacity-100')
      .find('.sidebar-fixed-help')
        .should('have.attr', 'href').and('include', 'https://ajuda.lojaintegrada.com.br/')

    cy.get('.sidebar-fixed .sidebar-fixed-content')
      .find('input')
      .should('exist')

    cy.get('.sidebar-fixed .sidebar-fixed-footer')
      .find('button')
      .should('exist')

    let alerted = ''
    cy.on('window:alert', msg => alerted = msg)
    cy.get('.sidebar-fixed .sidebar-fixed-close')
      .click()
      .then(() => expect(alerted).to.match(/Closed/))
    cy.get('.sidebar-fixed')
      .should('have.class', 'opacity-0')
  })

})
