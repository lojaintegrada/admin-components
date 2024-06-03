import * as React from "react"
import { composeStories } from "@storybook/testing-react"
import { mount } from "@cypress/react"
import * as stories from "./Calendar.stories"
import { CUSTOM_PERIOD, PREVIOUS_SEVEN_DAYS, PREVIOUS_THIRTY_DAYS, YESTERDAY } from "./constants"
import {
  subDays,
} from 'date-fns'

const { Default } = composeStories(stories)

const today = new Date("2024-06-15")
const tenDaysAgo = subDays(today, 10)
const _tenDaysAgo = tenDaysAgo.getDate()
// const fiveDaysAgo = subDays(today, 5)
// const _fiveDaysAgo = fiveDaysAgo.getDate()


const specTitle = require('cypress-sonarqube-reporter/specTitle');
describe(specTitle('Calendar tests'), () => {
  
  it('Default', () => {
    mount(<Default today={today}/>)
    // default periods click tests
    cy.get(`#${YESTERDAY.id}`).within(() => {
      cy.get('button').should('have.class', 'text-primary-dark').contains(YESTERDAY.label)
    })
    cy.get(`#${PREVIOUS_SEVEN_DAYS.id}`).within(() => {
      cy.get('button').click().should('have.class', 'text-primary-dark').contains(PREVIOUS_SEVEN_DAYS.label)
    })
    cy.get(`#${PREVIOUS_THIRTY_DAYS.id}`).within(() => {
      cy.get('button').click().should('have.class', 'text-primary-dark').contains(PREVIOUS_THIRTY_DAYS.label)
    })
    cy.get(`#${CUSTOM_PERIOD.id}`).within(() => {
      cy.get('button').click().should('have.class', 'text-primary-dark').contains(CUSTOM_PERIOD.label)
    })

    // calendar days visual behaviour
    // TODO: fix it!
    cy.get('#startCalendar').within(() => {
      cy.get(`.react-datepicker__day--00${_tenDaysAgo}`).click()
      // cy.get(`.react-datepicker__day--00${_fiveDaysAgo}`).should('have.css', 'background-color', '#E4F3F3')
    })
  })

})
