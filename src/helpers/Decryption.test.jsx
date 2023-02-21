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
  });

  it('should be able to decrypt text', () => {
    render(<Decryption />);
    // find the pages components
    const textarea = screen.getByLabelText('text');
    const passwordInput = screen.getByLabelText( 'password' );
screen.getByLabelText('password');
    const decryptButton = screen.getByText("Decrypt");
    // Type in the textarea and password
    userEvent.type(textarea, 'text');
    userEvent.type(passwordInput, 'password');
    // Click the encrypt button
    decryptButton.click();
    // Check that the encrypted text is displayed
    expect(screen.getByText('Decrypted Text: ')).toBeTruthy();
  });
});
