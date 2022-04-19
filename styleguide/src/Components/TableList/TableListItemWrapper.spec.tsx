import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./TableListItemWrapper.stories"

const { ItemWrapper } = composeStories(stories)

describe('TableListItemWrapper tests', () => {

  it('Default', () => {
    mount(<ItemWrapper withHover={false} isInsideContainer={false} />)
    cy.get('a.table-item-wrapper')
      .should('exist')
      .should('have.attr', 'href', '#a')
      .should('have.class', 'flex relative')
      .should('not.have.class', 'hover:bg-base-2 before:hover:block')
      .contains('Some randon content')
    
  })

  it('Without Wrapper', () => {
    mount(<ItemWrapper Wrapper={undefined} />)
    cy.get('div.table-item-wrapper').should('exist')
  })

  it('With Hover', () => {
    mount(<ItemWrapper withHover={true} isInsideContainer={true} Wrapper={undefined} />)
    cy.get('.table-item-wrapper').should('have.class', 'hover:bg-base-2 before:hover:block')
    cy.get('.table-item-wrapper').should('have.class', 'after:hover:block')
  })

})
