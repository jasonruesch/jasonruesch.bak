import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

describe('App', () => {
  it.skip('should render successfully', () => {
    const { baseElement } = render(<App />, { wrapper: BrowserRouter });
    expect(baseElement).toBeTruthy();
  });

  it.skip('should have a greeting as the title', () => {
    const { getByText } = render(<App />, { wrapper: BrowserRouter });
    expect(getByText(/Welcome jasonruesch/gi)).toBeTruthy();
  });
});
