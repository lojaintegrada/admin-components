import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./HelpLink.stories"

const { Default, Button, NoTextOnMobile } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('HelpLink tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('#helpLinkContainer').within(() => {
      cy.get('span').should('have.class', 'text-f6').and('have.class', 'font-semibold').contains('Saiba mais')
    })
  })

  it('Button', () => {
    mount(<Button />)
    cy.get('#helpLinkContainer').within(() => {
      cy.get('span').should('have.class', 'text-f6').and('have.class', 'font-semibold').contains('Saiba mais')
      cy.get('#helpLinkContainer').should(() => {alert(`Clicked!`)})
    })
  })
  
  it('NoTextOnMobile', () => {
    mount(<NoTextOnMobile />)
    cy.get('#helpLinkContainer').within(() => {
      cy.get('span').should('have.class', 'hidden').and('have.class', 'md:inline').contains('Saiba mais')
    })
  })

})
