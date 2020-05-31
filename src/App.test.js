import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from './App';
import JoinButton from "./components/JoinButton";

it('test join button', () => {
    const props = {group: ["Zhen Huang", "Benjamin Cranston", "Bobby O'Rourke", "Dean Norris", "Elijah Pitre", "Jesse Tov"],
    groupSize: "5/10",
    id: "15",
    name: "Yiwei Zhang"};
    const { container } = render(<JoinButton {...props} />);
    console.log(container);
    const joinStatus = getByTestId(container, "join");
    expect(joinStatus.textContent).toBe("Join");

    // click the button
    fireEvent.click(joinStatus);
    expect(joinStatus.textContent).toBe("Qu");

});
