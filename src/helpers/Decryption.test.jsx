import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Decryption from '../components/Decryption';

describe('Decryption', () => {
  it('should render successfully', async () => {
    render(<Decryption />);
    expect(screen.getByText('Decrypted Text:')).toBeTruthy();
    await waitFor(() => {
      expect(screen.getByText('Decrypted Text:')).toBeTruthy();
    });
  } );
  
  it('should be able to decrypt text', () => {
    render(<Decryption />);
    const textarea = screen.getByLabelText('text');
    const passwordInput = screen.getByLabelText( 'password' );
screen.getByLabelText('password');
    const decryptButton = screen.getByText('Decrypt');
    userEvent.type(textarea, 'text');
    userEvent.type(passwordInput, 'password');
    decryptButton.click();
    expect(screen.getByText('Decrypted Text: ')).toBeTruthy();
  });
});

