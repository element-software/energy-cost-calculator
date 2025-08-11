import { describe, it, expect } from "vitest";
import {
  calculateAnnualCostForTariff,
  calculateDualFuelCosts,
  roundCurrency,
} from "@/utils/energy/energy";
import { DualFuelTariff } from "@/utils/energy/energy.types";

describe("energy utils", () => {
  it("roundCurrency rounds to 2 dp", () => {
    expect(roundCurrency(1.005)).toBe(1.01);
    expect(roundCurrency(1.004)).toBe(1);
  });

  it("calculates annual cost for a single tariff", () => {
    const annual = calculateAnnualCostForTariff(
      { standingChargePerDay: 0.5, unitRatePerKwh: 0.3 },
      2000
    );
    // standing: 0.5*365=182.5, usage: 0.3*2000=600, total=782.5
    expect(annual).toBe(782.5);
  });

  it("calculates dual fuel costs and monthly total", () => {
    const tariffs: DualFuelTariff = {
      electricity: { standingChargePerDay: 0.5, unitRatePerKwh: 0.3 },
      gas: { standingChargePerDay: 0.3, unitRatePerKwh: 0.07 },
    };
    const result = calculateDualFuelCosts(tariffs, {
      electricityAnnualKwh: 2700,
      gasAnnualKwh: 12000,
    });
    expect(result.electricityAnnual).toBe(roundCurrency(0.5 * 365 + 0.3 * 2700));
    expect(result.gasAnnual).toBe(roundCurrency(0.3 * 365 + 0.07 * 12000));
    expect(result.totalAnnual).toBe(
      roundCurrency(result.electricityAnnual + result.gasAnnual)
    );
    expect(result.totalMonthly).toBe(
      roundCurrency(result.totalAnnual / 12)
    );
  });
});


