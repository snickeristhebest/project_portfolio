import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// Mock react-confetti to avoid canvas issues in tests
jest.mock('react-confetti', () => {
  return function MockConfetti() {
    return <div data-testid="confetti">Confetti</div>;
  };
});

describe('App Component', () => {
  // Mock HTMLMediaElement.play before each test
  beforeEach(() => {
    window.HTMLMediaElement.prototype.play = jest.fn(() => Promise.resolve());
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders Enter Site button on initial load', () => {
    render(<App />);
    const button = screen.getByText(/Enter Site/i);
    expect(button).toBeInTheDocument();
  });

  test('shows image after clicking Enter Site button', () => {
    render(<App />);
    
    // Initially, image should not be visible
    const image = screen.queryByAltText('face');
    expect(image).not.toBeInTheDocument();
    
    // Click the button
    const button = screen.getByText(/Enter Site/i);
    fireEvent.click(button);
    
    // Now image should be visible
    const visibleImage = screen.getByAltText('face');
    expect(visibleImage).toBeInTheDocument();
  });

  test('plays audio when Enter Site button is clicked', () => {
    const playMock = jest.fn(() => Promise.resolve());
    window.HTMLMediaElement.prototype.play = playMock;
    
    render(<App />);
    
    const button = screen.getByText(/Enter Site/i);
    fireEvent.click(button);
    
    expect(playMock).toHaveBeenCalled();
  });

  test('button disappears after clicking', () => {
    render(<App />);
    
    const button = screen.getByText(/Enter Site/i);
    fireEvent.click(button);
    
    expect(button).not.toBeInTheDocument();
  });

  test('shows confetti after entering site', () => {
    render(<App />);
    
    const button = screen.getByText(/Enter Site/i);
    fireEvent.click(button);
    
    // Our mock confetti component should be rendered
    const confetti = screen.getByTestId('confetti');
    expect(confetti).toBeInTheDocument();
  });

  test('image has growing class after entering site', () => {
    render(<App />);
    
    const button = screen.getByText(/Enter Site/i);
    fireEvent.click(button);
    
    const image = screen.getByAltText('face');
    expect(image).toHaveClass('growing');
  });
});