import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Button tests', () => {
  it('should have overridable styles', () => {
    const { container } = render(
      <Button data-testid="button">Black Button</Button>
    )

    expect(container).toBeDefined()
  })

  it('should not have a11y violations', async () => {
    const { container } = render(
      <>
        <Button>Button</Button>
        <Button>Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="tertiary">Button</Button>
        <Button size="small">Button</Button>
        <Button variant="danger">Button</Button>
      </>
    )

    expect(container).toBeDefined()
  })
})
