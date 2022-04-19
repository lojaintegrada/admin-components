import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./TableListItemLoading.stories"

const { ItemLoading } = composeStories(stories)

describe('TableListItemLoading tests', () => {

  it('Default', () => {
    mount(<ItemLoading />)
    cy.get('.table-item.table-item-loading')
      .should('exist')
      .find('.table-item-content .table-item-title .animate-pulse')
        .should('exist')
  })

})
