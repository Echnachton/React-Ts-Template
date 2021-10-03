import React from "react";
import {render} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("testing description goes here", () => {
    const component = render(/*Component Goes Here*/);
    const el = component.getByTestId(/* data-testid */);
    expect(el).toBe(/* result */);
})