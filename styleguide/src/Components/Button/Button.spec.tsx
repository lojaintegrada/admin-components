// import * as React from 'react'
// import { mount } from '@cypress/react'
// import { Button } from './Button'
// import { defaultCSSforCypressTest } from '../../utils/testConstants'

import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Button.stories"

const { Default } = composeStories(stories)

describe('Button tests', () => {
  it('Default', () => {
    mount(<Default>Test button</Default>)
    cy.get('button').contains('Test button').click()
    cy.get('button').should('not.have.class', 'bg-danger')
  })
  it('Danger', () => {
    mount(<Default variant="danger">Test button</Default>)
    cy.get('button').should('have.class', 'bg-danger')
  })
  
})
