import { render, screen } from '@testing-library/react';
import { PeopleList } from './people-list';


beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('PeopleList', () => {
  it('should render layout with title people of star wars ', () => {
    render(<PeopleList />)
    const headingElement = screen.getByText(/people of star wars/i)
    expect(headingElement).toBeInTheDocument()
  });
})


