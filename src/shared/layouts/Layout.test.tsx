import { render, screen } from '@testing-library/react';
import { Layout } from './Layout'
import { BrowserRouter } from 'react-router-dom';

const MockLayoutBack = ({ hasBack }: { hasBack: boolean }) => {
  return (
    <BrowserRouter>
      <Layout title='Hello World' back={hasBack} />
    </BrowserRouter>
  )
}

describe('Layout', () => {
  it('should render title in Layout Component', () => {
    render(<Layout title="Hello World" />)
    const headingElement = screen.getByText(/hello world/i)
    expect(headingElement).toBeInTheDocument()
  });

  it('should render back button if back prop is true', () => {
    render(<MockLayoutBack hasBack={true} />)
    const imgElement = screen.getByAltText(/go back/i)
    expect(imgElement).toBeInTheDocument()
  })

  it('should not render back button if back prop is false', () => {
    render(<MockLayoutBack hasBack={false} />)
    const imgElement = screen.queryByAltText(/go back/i)
    expect(imgElement).not.toBeInTheDocument()
  })
})


