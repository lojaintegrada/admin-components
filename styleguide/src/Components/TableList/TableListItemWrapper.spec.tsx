import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./TableList.stories"

const { Default } = composeStories(stories)

describe('Tabs tests', () => {

  it('Default', () => {
    mount(<Default />)
    
    // cy.get('.tabs .tabs-item')
    //   .should('have.length', 4)
    //   .first().within(() => {
    //     cy.get('span').contains('Pedidos')
    //     cy.get('span').should('have.class', 'border-primary')
    //   })
    
  })

})
