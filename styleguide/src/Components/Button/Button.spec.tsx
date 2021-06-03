import * as React from 'react'
import { mount } from '@cypress/react'
import { Button } from './Button'

it('Button', () => {
  mount(<Button>Test button</Button>,
    {
      cssFile: 'dist/tailwind.css'
    }
  )
  cy.get('button').contains('Test button').click()
})
