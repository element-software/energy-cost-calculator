import { describe, it, expect } from "vitest";
import CostBreakdownView from "@/components/calculator/CostBreakdownView";
import { render } from "@testing-library/react";

describe("CostBreakdownView", () => {
  it("should render successfully", () => {
    const props = {
      electricityAnnual: 100,
      gasAnnual: 200,
      totalAnnual: 300,
      totalMonthly: 25,
    };
    const { getByText } = render(<CostBreakdownView {...props} />);
    expect(getByText("Electricity (annual)")).toBeInTheDocument();
    expect(getByText("£100.00")).toBeInTheDocument();
    expect(getByText("Gas (annual)")).toBeInTheDocument();
    expect(getByText("£200.00")).toBeInTheDocument();
    expect(getByText("Total (monthly)")).toBeInTheDocument();
    expect(getByText("£25.00")).toBeInTheDocument();
    expect(getByText("Total (annual)")).toBeInTheDocument();
    expect(getByText("£300.00")).toBeInTheDocument();
  });

  it("should render null if any of the props are undefined", () => {
    const props = {
      electricityAnnual: 100,
      gasAnnual: 200,
      totalAnnual: 300,
      totalMonthly: null,
    };
    // @ts-expect-error forcing null in props
    const { container } = render(<CostBreakdownView {...props} />);
    expect(container).toBeNull();
  });
});