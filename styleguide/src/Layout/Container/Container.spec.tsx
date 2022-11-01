import * as React from 'react'
import { composeStories } from '@storybook/testing-react'
import { mount } from '@cypress/react'
import * as stories from './Container.stories'

import { CONTAINER_MAX_SIZE } from '../constants'

const { Default, Expanded } = composeStories(stories)

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Container tests'), () => {
  it('Default', () => {
    mount(<Default />)
    cy.get('.page-container').should('have.class', CONTAINER_MAX_SIZE.default)
  })

  it('Expanded', () => {
    mount(<Expanded />)
    cy.get('.page-container').should('have.class', CONTAINER_MAX_SIZE.expanded)
  })
})

