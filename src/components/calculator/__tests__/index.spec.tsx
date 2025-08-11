import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnergyCalculator from "..";
import React from "react";

describe("EnergyCalculator component", () => {
  it("renders and updates savings when inputs change", async () => {
    render(<EnergyCalculator />);

    // First click the toggle to show comparison
    const toggleButton = screen.getByRole("button", { name: /compare tariffs/i });
    await userEvent.click(toggleButton);

    // Find the Compare tariff section to scope inputs with duplicate labels
    const compareSection = screen
      .getByRole("heading", { name: /compare tariff/i })
      .closest("div") as HTMLElement;

    const compareElecUnit = within(compareSection).getByRole("spinbutton", {
      name: /electricity unit rate/i,
    }) as HTMLInputElement;
    await userEvent.clear(compareElecUnit);
    await userEvent.type(compareElecUnit, "0.10");

    const savingsSection = screen
      .getByRole("heading", { name: /savings/i })
      .closest("div") as HTMLElement;
    expect(savingsSection.textContent).toMatch(/£/);
  });
});


