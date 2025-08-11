export type Tariff = {
  standingChargePerDay: number; // currency per day
  unitRatePerKwh: number; // currency per kWh
};

export type DualFuelTariff = {
  electricity: Tariff;
  gas: Tariff;
};

export type Usage = {
  electricityAnnualKwh: number;
  gasAnnualKwh: number;
};

export type CostBreakdown = {
  electricityAnnual: number;
  gasAnnual: number;
  totalAnnual: number;
  totalMonthly: number;
};

export type TariffInput = {
  electricityStanding: string;
  electricityUnit: string;
  gasStanding: string;
  gasUnit: string;
};

export type UsageInput = {
  electricityKwh: string;
  gasKwh: string;
};