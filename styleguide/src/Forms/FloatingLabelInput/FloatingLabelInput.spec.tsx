import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './FloatingLabelInput.stories'

const { Default, Prefix, IconPrefix, WithBoth } = composeStories(stories)

describe('Input tests', () => {
  it('Default', () => {
    mount(<Default />)
    const val = 'Preencher campo'
    cy.get('input').type(val).should('have.value', val)
  })

  it('Sufix and Prefix', () => {
    mount(<Prefix />)
    cy.get('.adornment').contains('R$')

    mount(<IconPrefix />)
    cy.get('svg').should('have.class', 'icon-cog').parent('label')

    mount(<WithBoth />)
    cy.get('.adornment').should('have.length', 2)
  })
})
