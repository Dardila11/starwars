import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PeopleList } from './people-list';

/* const MockLayoutBack = ({ hasBack }: { hasBack: boolean }) => {
  return (
    <BrowserRouter>
      <Layout title='Hello World' back={hasBack} />
    </BrowserRouter>
  )
} */

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


