import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './Dropdown.stories'

const { Default, Empty, Disabled, Searchable } = composeStories(stories)

describe('Dropdown tests', () => {
  it('Default', () => {
    mount(<Default />)
    const val = 'Selecione um item'
    cy.get('.select__placeholder').contains(val)
  })

  it('Empty', () => {
    mount(<Empty />)
    const val = 'Não foram encontradas opções'
    cy.get('.select__control').click()
    cy.get('.select__menu-notice--no-options').contains(val)
  })

  it('Disabled', () => {
    mount(<Disabled />)
    cy.get('input').should('be.disabled')
    cy.get('.select__control').should(
      'have.class',
      'select__control--is-disabled'
    )
  })

  it('Searchable', () => {
    mount(<Searchable />)
    const val = 'Teste'
    cy.get('input').invoke('attr', 'value', val)
    cy.get('input').should('have.value', val)
  })
})
