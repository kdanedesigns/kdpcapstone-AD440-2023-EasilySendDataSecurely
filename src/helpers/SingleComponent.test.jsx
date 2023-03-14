import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SingleComponent from '../components/SingleComponent';

describe('SingleComponent', () => {
  it('should render successfully', () => {
    render(<SingleComponent />);
    expect(screen.getByText('Encrypted!')).toBeTruthy();
  });

  it('should be able to encrypt text', () => {
    render(<SingleComponent />);
    // find the pages components
    const textarea = screen.getByLabelText('text');
    const passwordInput = screen.getByLabelText('password');
    const encryptButton = screen.getByText('Click to Encrypt');

    // Type in the textarea and password
    userEvent.type(textarea, 'text');
    userEvent.type(passwordInput, 'password');
    // Click the encrypt button
    encryptButton.click();
    // Check that the encrypted text is displayed
    expect(screen.getByText('Encrypted!')).toBeTruthy();
  });
});
