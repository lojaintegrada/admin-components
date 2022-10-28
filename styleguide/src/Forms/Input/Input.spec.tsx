import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './Input.stories'

const {
  Default,
  Error,
  Prefix,
  IconPrefix,
  WithBoth,
  Disabled,
  Readonly,
  PrefixWithoutBorder,
  SufixWithoutBorder,
} = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Input tests'), () => {
  it('Default', () => {
    mount(<Default />)
    const val = 'Preencher campo'
    cy.get('input').type(val).should('have.value', val)
    cy.get('label.input-label').contains('Meu Campo')
    cy.get('div.input-help-text').contains('Texto de ajuda')
  })

  it('Error', () => {
    mount(<Error />)
    cy.get('input').should('have.class', 'border-danger')
  })

  it('Required', () => {
    mount(<Default required />)
    cy.get('input').should('have.attr', 'required')
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('input')
      .parent()
      .should('have.class', '!bg-base-3 !pointer-events-none !text-on-base-2')
  })

  it('Readonly', () => {
    mount(<Readonly />)
    cy.get('input').parent().should('have.class', '!bg-base-2')
  })

  it('Variants', () => {
    mount(<Default variant="default" />)
    cy.get('input').parent().should('have.class', 'h-12')

    mount(<Default variant="small" />)
    cy.get('input').parent().should('have.class', 'h-10')

    mount(<Default variant="large" />)
    cy.get('input').parent().should('have.class', 'h-14')

    mount(<Default variant="xlarge" />)
    cy.get('input').parent().should('have.class', 'h-24')
  })

  it('Adornments', () => {
    mount(<Prefix />)
    cy.get('.adornment').contains('R$')

    mount(<IconPrefix />)
    cy.get('svg').should('have.class', 'icon-cog').parent('label')

    mount(<PrefixWithoutBorder />)
    cy.get('input').should('not.have.class', 'border-l')

    mount(<SufixWithoutBorder />)
    cy.get('input').should('not.have.class', 'border-r')

    mount(<WithBoth />)
    cy.get('.adornment').should('have.length', 2)
  })
})
