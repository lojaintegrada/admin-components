import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Modal.stories"
const specTitle = require('cypress-sonarqube-reporter/specTitle');

const { Default } = composeStories(stories)

describe(specTitle('Modal tests'), () => {

  it('Default', () => {
    mount(<Default />)
  })

})
