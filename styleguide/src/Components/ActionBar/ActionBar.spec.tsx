import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './ActionBar.stories'

const { Default, OnlyMobile } = composeStories(stories)

describe('ActionBar tests', () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('.fixed').should('not.have.class', 'lg:hidden')
  })

  it('OnlyMobile', () => {
    mount(<OnlyMobile />)
    cy.get('.fixed').should('have.class', 'lg:hidden')
  })
})

