import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

// 1️⃣ Count starts with 0 and button is disabled
test("Count starts at 0 and button is disabled initially", () => {
// - Render the Counter component
const { getByTestId } = render(<Counter />);
// - Find the count and button elements
const countDisplay = getByTestId("count");
const button = getByTestId("button");
// - Assert that the count starts at 0
expect(countDisplay).toHaveTextContent("Clicked 0 times");
// - Assert that the button is disabled initially
expect(button).toBeDisabled();
});

// 2️⃣ Checking the checkbox enables the button
test("Checking the checkbox enables the button",() =>{
// - Render the Counter component
const { getByTestId } = render(<Counter />);
// - Find the button and checkbox elements
const button = getByTestId("button");
const checkbox = getByTestId("checkbox");
// - Verify the button is initially disabled
expect(button).toBeDisabled();
// - Click the checkbox to check it
fireEvent.click(checkbox);
// - Verify the button is now enabled
expect(button).toBeEnabled();
});

// 3️⃣ Clicking enabled button increments counter
// - Render the Counter component
// - Find all necessary elements
// - Enable the button by checking the checkbox
// - Click the button once
// - Verify the count is now 1 (singular form)
// - Click the button again
// - Verify the count is now 2 (plural form)

// 4️⃣ Document title updates when checkbox is checked
// - Set up initial document title
// - Render the Counter component
// - Find the button and checkbox elements
// - Check the checkbox
// - Verify title shows initial count of 0
// - Click the button to increment counter
// - Verify title updates to show count of 1
// - Uncheck the checkbox