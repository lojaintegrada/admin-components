import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './InformationBoxt.stories'

const { Default } = composeStories(stories)

describe('InformationBox tests', () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('.InformationBox-title').last().contains('Dica!')
  })

  it('Variants', () => {
    mount(<Default type="tip" />)
    cy.get('.InformationBox-icon').should('have.class', 'icon-lightbulb')
    cy.get('.InformationBox').should('have.class', 'bg-success-light')

    mount(<Default type="warning" />)
    cy.get('.InformationBox-icon').should('have.class', 'icon-exclamationTriangle')
    cy.get('.InformationBox').should('have.class', 'bg-warning-light')

    mount(<Default type="danger" />)
    cy.get('.InformationBox-icon').should('have.class', 'icon-ban')
    cy.get('.InformationBox').should('have.class', 'bg-danger-light')
  })
})
