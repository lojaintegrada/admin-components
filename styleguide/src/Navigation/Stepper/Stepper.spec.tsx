import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Stepper.stories"

const { Default, NoText, WithText, HandleClick, CustomStepClassName } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Stepper tests'), () => {

  it('Default', () => {
    mount(<Default />)
    cy.get('#stepsContainer').within(() => {
      cy.get('#stepCircle1').should('have.class', 'bg-primary').contains('1')
      cy.get('#stepCircle2').should('have.class', 'bg-inverted-1').contains('2')
      cy.get('#stepCircle3').should('have.class', 'bg-base-4').contains('3')
    })
  })

  it('NoText', () => {
    mount(<NoText />)
    cy.get('#stepsContainer').within(() => {
      cy.get('#stepCircle1').should('have.class', 'bg-primary').contains('1')
      cy.get('#rightLinkStep1').should('have.class', 'absolute').and('have.class', '-right-5').and('have.class', 'bg-primary')
      cy.get('#stepCircle2').should('have.class', 'bg-inverted-1').contains('2')
      cy.get('#leftLinkStep2').should('have.class', 'absolute').and('have.class', '-left-5').and('have.class', 'bg-primary')
      cy.get('#rightLinkStep2').should('have.class', 'absolute').and('have.class', '-right-5').and('have.class', 'bg-base-4')
      cy.get('#stepCircle3').should('have.class', 'bg-base-4').contains('3')
      cy.get('#leftLinkStep3').should('have.class', 'absolute').and('have.class', '-left-5').and('have.class', 'bg-base-4')
    })
  })

  it('WithText', () => {
    mount(<WithText />)
    cy.get('#stepsContainer').within(() => {
      cy.get('#stepCircle1').should('have.class', 'bg-primary').contains('1')
      cy.get('#step1 span').should('have.class', 'text-center').contains('Step 1')
      cy.get('#rightLinkStep1').should('not.exist')
      cy.get('#step2 span').should('have.class', 'text-center').contains('Step 2')
      cy.get('#leftLinkStep2').should('not.exist')
      cy.get('#rightLinkStep2').should('not.exist')
      cy.get('#step3 span').should('have.class', 'text-center').contains('Step 3')
      cy.get('#leftLinkStep3').should('not.exist')
    })
  })

  it('HandleClick', () => {
    mount(<HandleClick />)
    cy.get('#stepsContainer').within(() => {
      cy.get('#stepCircle1').should('have.class', 'bg-primary').contains('1')
      cy.get('#stepCircle1').should(() => {alert(`Clicked on step 1!`)})
      cy.get('#stepCircle2').should('have.class', 'bg-inverted-1').contains('2')
      cy.get('#stepCircle2').should(() => {alert(`Clicked on step 2!`)})
      cy.get('#stepCircle3').should('have.class', 'bg-base-4').contains('3')
      cy.get('#stepCircle3').should(() => {alert(`Clicked on step 3!`)})
    })
  })

  it('CustomStepClassName', () => {
    mount(<CustomStepClassName />)
    cy.get('#stepsContainer').within(() => {
      cy.get('#stepCircle1').should('have.class', '!bg-primary-light').and('have.class', '!border-primary').and('have.class', '!text-primary').contains('1')
      cy.get('#stepCircle2').should('have.class', '!bg-warning-light').and('have.class', '!border-warning').and('have.class', '!text-warning').contains('2')
      cy.get('#stepCircle3').should('have.class', '!bg-danger-light').and('have.class', '!border-danger').and('have.class', '!text-danger').contains('3')
    })
  })

})
