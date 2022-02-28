import { addMinutesToDate } from './utils'

describe('addMinutesToDate', () => {
  it('should correctly add minutes to a date', () => {
    const initialDate = new Date('2022-01-01T00:00:00.000Z')
    const newDate = addMinutesToDate(initialDate, 90)
    expect(newDate).toEqual(new Date('2022-01-01T01:30:00.000Z'))
  })
})
