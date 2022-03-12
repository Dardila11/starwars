import { render, screen } from '@testing-library/react';
import { VehiclesInfo } from '../VehiclesInfo';

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

describe('VehiclesInfo', () => {
  it('should render vehicles ', () => {
    const vehiclesList = ['vehicle 1', 'vehicle 2']
    render(<VehiclesInfo vehicles={vehiclesList} />)
    const headingElement = screen.getByText(/vehicles/i)
    expect(headingElement).toBeInTheDocument()
  });

  it('should not render anything if vehicles prop is empty', async () => {
    const vehiclesList : string[] = []
    render(<VehiclesInfo vehicles={vehiclesList} />)
    const divElement = screen.queryByTestId('vehiclesName-0')
    expect(divElement).not.toBeInTheDocument()

  })
  
  it('should render a list of vehicles', async () => {
    const vehiclesList : string[] = ['vehicle 1', 'vehicle 2']
    render(<VehiclesInfo vehicles={vehiclesList} />)
    const divElement = await screen.findByTestId('vehicleName-0')
    expect(divElement).toBeInTheDocument()
  })
})


