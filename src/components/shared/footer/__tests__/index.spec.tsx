import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Footer from "..";

describe("Footer", () => {
  it("should render the component successfully", () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toMatchSnapshot();
  });
});
