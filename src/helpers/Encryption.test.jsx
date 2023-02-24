import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Encryption from '../components/Encryption';

describe('Encryption', () => {
  it('should render successfully', async () => {
    render(<Encryption />);
    expect( screen.getByText('Encrypted Text:')).toBeTruthy();
    await waitFor( () => { 
      expect( screen.getByText('Encrypted Text:')).toBeTruthy();
    });
  });
  
  it('should be able to encrypt text', () => {
    render(<Encryption />);
    const textarea = screen.getByLabelText('text');
    const passwordInput = screen.getByLabelText('password');
screen.getByLabelText('password');

    const encryptButton = screen.getByText('Encrypt');
    userEvent.type(textarea, 'text');
    userEvent.type(passwordInput, 'password');
    encryptButton.click();
    expect(screen.getByText('Encrypted Text: ')).toBeTruthy();
  });
});