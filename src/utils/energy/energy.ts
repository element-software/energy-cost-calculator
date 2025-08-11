import { Tariff, DualFuelTariff, Usage, CostBreakdown, TariffInput, UsageInput } from "./energy.types";

export function calculateAnnualCostForTariff(
  tariff: Tariff,
  annualUsageKwh: number
): number {
  const standing = tariff.standingChargePerDay * 365;
  const usage = tariff.unitRatePerKwh * annualUsageKwh;
  const annual = standing + usage;
  return roundCurrency(annual);
}

export function calculateDualFuelCosts(
  tariffs: DualFuelTariff ,
  usage: Usage
): CostBreakdown {
  const electricityAnnual = calculateAnnualCostForTariff(
    tariffs.electricity,
    usage.electricityAnnualKwh
  );
  const gasAnnual = calculateAnnualCostForTariff(
    tariffs.gas,
    usage.gasAnnualKwh
  );

  const totalAnnual = roundCurrency(electricityAnnual + gasAnnual);
  const totalMonthly = roundCurrency(totalAnnual / 12);
  return { electricityAnnual, gasAnnual, totalAnnual, totalMonthly };
}

export function roundCurrency(value: number): number {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

export function parseTariff(input: TariffInput): DualFuelTariff {
  return {
    electricity: {
      standingChargePerDay: Number(input.electricityStanding) || 0,
      unitRatePerKwh: Number(input.electricityUnit) || 0,
    },
    gas: {
      standingChargePerDay: Number(input.gasStanding) || 0,
      unitRatePerKwh: Number(input.gasUnit) || 0,
    },
  };
}

export function parseUsage(input: UsageInput): Usage {
  return {
    electricityAnnualKwh: Number(input.electricityKwh) || 0,
    gasAnnualKwh: Number(input.gasKwh) || 0,
  };
}


