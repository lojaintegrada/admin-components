import React from 'react'
import * as ReactDOM from 'react-dom'
import { Default as Thing } from '../src/Button/Button.stories'

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Thing />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
