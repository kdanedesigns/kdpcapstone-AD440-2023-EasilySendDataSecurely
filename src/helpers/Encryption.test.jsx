import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Encryption from '../components/Encryption';

describe('Encryption', () => {
  it('should render successfully', async () => {
    render(<Encryption />);
    expect( screen.getByText( 'Encrypted Text:' ) ).toBeTruthy();
    await waitFor( () => { 
      expect( screen.getByText( 'Eecrypted Text:' ) ).toBeTruthy();
    } );
  } );
  

  it('should be able to encrypt text', () => {
    render(<Encryption />);
    // find the pages components
    const textarea = screen.getByLabelText('text');
    const passwordInput = screen.getByLabelText('password');
screen.getByLabelText('password');
    const encryptButton = screen.getByText('Encrypt');
    // Type in the textarea and password
    userEvent.type(textarea, 'text');
    userEvent.type(passwordInput, 'password');
    // Click the encrypt button
    encryptButton.click();
    // Check that the encrypted text is displayed
      expect(screen.getByText('Encrypted Text: ')).toBeTruthy();
  });
});