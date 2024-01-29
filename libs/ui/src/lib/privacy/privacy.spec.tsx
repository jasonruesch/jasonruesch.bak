import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Privacy from './privacy';

describe('Privacy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Privacy />, { wrapper: BrowserRouter });
    expect(baseElement).toBeTruthy();
  });
});
