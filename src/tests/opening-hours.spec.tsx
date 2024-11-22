import { render } from '@testing-library/react'
import { OpeningHours } from '../components/opening-hours'

describe('Opening Hours', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should have closed state', async () => {
    const date = new Date('2024-11-13T18:00:00Z')
    vi.setSystemTime(date)

    const wrapper = render(<OpeningHours />)
    const openingHoursDiv = wrapper.getByTestId('opening-hours-div')

    expect(openingHoursDiv).toHaveClass('bg-red-layout')
  })

  it('should have open state', async () => {
    const date = new Date('2024-11-13T20:00:00Z')
    vi.setSystemTime(date)

    const wrapper = render(<OpeningHours />)
    const openingHoursDiv = wrapper.getByTestId('opening-hours-div')

    expect(openingHoursDiv).toHaveClass('bg-green-600')
  })

  it('should have close state on weekends', async () => {
    const date = new Date('2024-11-16T20:00:00Z')
    vi.setSystemTime(date)

    const wrapper = render(<OpeningHours />)
    const openingHoursDiv = wrapper.getByTestId('opening-hours-div')

    expect(openingHoursDiv).toHaveClass('bg-red-layout')
  })
})
