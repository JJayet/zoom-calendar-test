import { render } from '@testing-library/react'

jest.mock('./meetings', () => {
  return {
    getMeetings: jest.fn(() => Promise.resolve({ result: [] })),
    createMeeting: jest.fn(() => Promise.resolve({})),
  }
})

// eslint-disable-next-line import/first
import { App } from './app'

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />)

    expect(baseElement).toBeTruthy()
  })
})
