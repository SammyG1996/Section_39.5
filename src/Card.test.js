import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

/**Smoke test */
it('should render without crashing', () => {
    render(< Card />)
})


/**Snapshot test */
it("matches snapshot", () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot();
  });
  