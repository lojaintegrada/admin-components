import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Modal.stories"

const { Default } = composeStories(stories)

describe('Modal tests', () => {

  it('Default', () => {
    mount(<Default />)
    
  })

})
