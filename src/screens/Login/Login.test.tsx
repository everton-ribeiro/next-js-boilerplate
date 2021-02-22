/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { render, screen } from "@testing-library/react";

import Login from ".";

describe("<Login />", () => {
  it("should render the heading", () => {
    const { container } = render(<Login />);
    expect(screen.getByRole("heading", { name: /Home/i })).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
