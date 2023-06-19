import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Badge.stories"
import { Badge } from "./Badge"

const { Default, Small, Expanded } = composeStories(stories)
const badgeClass = '.badge'
const badgeTextClass = '.badgeText'

const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Badge tests'), () => {

  it('Default', () => {
    const text = 'Example text'
    mount(<Default text={text} />)
    cy.get(badgeClass).contains(text)
  })

  it('Small', () => {
    mount(<Small />)
    cy.get(badgeClass).should('have.class', 'px-1.5')
  })

  it('Size XSmall', () => {
    mount(<Badge size="xsmall" text="Example text" />)
    cy.get(badgeClass).should('have.class', 'text-f8')
  })

  it('Rounded Small', () => {
    mount(<Badge rounded="small" text="Example text" />)
    cy.get(badgeClass).should('have.class', 'rounded')
  })

  it('Rounded None', () => {
    mount(<Badge rounded="none" text="Example text" />)
    cy.get(badgeClass).should('have.class', 'rounded-none')
  })

  it('Rounded Full', () => {
    mount(<Badge rounded="full" text="Example text" />)
    cy.get(badgeClass).should('have.class', 'rounded-full')
  })

  it('Expanded', () => {
    mount(<Expanded />)
    cy.get(badgeClass).should('have.class', 'w-full')
  })

  it('Variants', () => {
    mount(<Default type="neutral" />)
    cy.get(badgeClass).should('have.class', 'bg-inverted-2')

    mount(<Default type="neutralLight" />)
    cy.get(badgeClass).should('have.class', 'bg-inverted-3')
    cy.get(badgeTextClass).should('have.class', 'text-tertiary')

    mount(<Default type="primary" />)
    cy.get(badgeClass).should('have.class', 'bg-primary-dark')

    mount(<Default type="success" />)
    cy.get(badgeClass).should('have.class', 'bg-success-dark')

    mount(<Default type="warning" />)
    cy.get(badgeClass).should('have.class', 'bg-warning-dark')

    mount(<Default type="danger" />)
    cy.get(badgeClass).should('have.class', 'bg-danger-dark')

    mount(<Default type="focus" />)
    cy.get(badgeClass).should('have.class', 'bg-focus')
  })
})
