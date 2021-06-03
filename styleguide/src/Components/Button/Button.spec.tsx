import * as React from 'react'
import { mount } from '@cypress/react'
import { Button } from './Button'
import { defaultCSSforCypressTest } from '../../utils/testConstants'

describe('Button tests', () => {
  it('Default', () => {
    mount(<Button>Test button</Button>, defaultCSSforCypressTest)
    cy.get('button').contains('Test button').click()
    cy.get('button').should('not.have.class', 'bg-danger')
  })
  it('Danger', () => {
    mount(<Button variant="danger">Test button</Button>, defaultCSSforCypressTest)
    cy.get('button').should('have.class', 'bg-danger')
  })
  
})
