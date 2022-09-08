import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './ToggleButton.stories'

const { WithIcon, WithText, Disabled} = composeStories(stories)

describe('Toggle tests', () => {
  it('With Icon', () => {
    mount(<WithIcon />)
    cy.get('input[type=radio]:checked').should('have.length', 1)
    cy.get('ul').children().should('have.lengthOf.above', 1)
    cy.get('svg').children().should('have.lengthOf.above', 1)
  })

  it('With Text', () => {
    mount(<WithText />)
    cy.get('input[type=radio]:checked').should('have.length', 1)
    cy.get('ul').children().should('have.lengthOf.above', 0)
    cy.get('.checkmark').children().should('have.lengthOf.above', 0).contains('span',`Text`)
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('input[type=radio]:checked').should('have.length', 1)
    cy.get('.checkmark').should('have.class', 'pointer-events-none')
  })
})
