kdpcapstone - AD440 - 2023 - EasilySendDataSecurely;
import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Decryption from "../components/Decryption";

describe('Decryption', () => {
  it('should render successfully', () => {
    render(<Decryption />);
    expect(screen.getByText('Decrypted Text:')).toBeTruthy();
  } );
  
  it('should be able to decrypt text', () => {
    render( <Decryption /> );
    // find the pages components
    const textarea = screen.getByLabelText( 'Message' );
    const passwordInput = screen.getByLabelText( 'Password' );
    const decryptButton = screen.getByText( 'Decrypt' );
    // Type in the textarea and password
    userEvent.type( textarea, 'Hello World' );
    userEvent.type( passwordInput, 'password' );
    // Click the encrypt button
    decryptButton.click();
    // Check that the encrypted text is displayed
    expect( screen.getByText( 'Decrypted Text: ' ) ).toBeTruthy();
  });
});
