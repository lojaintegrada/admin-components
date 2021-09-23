import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Alert.stories"

const { Default, WithActions } = composeStories(stories)

describe('Alert tests', () => {

  it('Default', () => {
    mount(<Default isOpen={false} />)
    cy.get('.alert').should('not.exist')

    const title = 'Example text'
    const subtitle = 'Example subtitle'
    mount(<Default title={title} subtitle={subtitle} />)
    cy.get('.alert .alert-title').contains(title)
    cy.get('.alert .alert-subtitle').contains(subtitle)
    cy.get('.alert .alert-icon').should('exist')
    cy.get('.alert .alert-close button').should('exist')

    mount(<Default hideIcon={true} showClose={false} />)
    cy.get('.alert .alert-icon').should('not.exist')
    cy.get('.alert .alert-close button').should('not.exist')
  })

  it('Variants', () => {
    mount(<Default type="success" />)
    cy.get('.alert').should('have.class', 'bg-success-light')

    mount(<Default type="warning" />)
    cy.get('.alert').should('have.class', 'bg-warning-light')

    mount(<Default type="danger" />)
    cy.get('.alert').should('have.class', 'bg-danger-light')

    mount(<Default type="info" />)
    cy.get('.alert').should('have.class', 'border-inverted-2')

    mount(<Default type="primary" />)
    cy.get('.alert').should('have.class', 'bg-primary-light')
  })

  it('WithActions', () => {
    mount(<WithActions />)
    cy.get('.alert .alert-actions *').should('exist')
    let alerted = ''
    cy.on('window:alert', msg => alerted = msg)
    cy.get('.alert .alert-close button').click().then(() => expect(alerted).to.match(/Alert closed/))
  })

})
