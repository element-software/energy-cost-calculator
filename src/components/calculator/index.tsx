"use client";

import { useMemo, useState } from "react";
import {
  calculateDualFuelCosts,
  parseTariff,
  parseUsage,
  roundCurrency,
} from "@/utils/energy/energy";
import { TariffInput, UsageInput } from "@/utils/energy/energy.types";
import Card from "@/components/card/card";
import CostBreakdownView from "@/components/calculator/CostBreakdownView";
import Row from "@/components/calculator/Row";
import TariffForm from "@/components/calculator/TariffForm";
import clsx from "clsx";

const inputClass =
  "w-full rounded-xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500";
const labelClass = "text-sm text-foreground/80";

export default function EnergyCalculator() {
  const [showComparison, setShowComparison] = useState(false);
  const [usageInput, setUsageInput] = useState<UsageInput>({
    electricityKwh: "2700",
    gasKwh: "12000",
  });

  const [currentTariffInput, setCurrentTariffInput] = useState<TariffInput>({
    electricityStanding: "0.50",
    electricityUnit: "0.28",
    gasStanding: "0.30",
    gasUnit: "0.07",
  });

  const [compareTariffInput, setCompareTariffInput] = useState<TariffInput>({
    electricityStanding: "0.45",
    electricityUnit: "0.30",
    gasStanding: "0.29",
    gasUnit: "0.06",
  });

  const usage = useMemo(() => parseUsage(usageInput), [usageInput]);
  const currentTariff = useMemo(
    () => parseTariff(currentTariffInput),
    [currentTariffInput]
  );
  const compareTariff = useMemo(
    () => parseTariff(compareTariffInput),
    [compareTariffInput]
  );

  const currentCosts = useMemo(
    () => calculateDualFuelCosts(currentTariff, usage),
    [currentTariff, usage]
  );
  const compareCosts = useMemo(
    () => calculateDualFuelCosts(compareTariff, usage),
    [compareTariff, usage]
  );

  const savingAnnual = showComparison
    ? roundCurrency(currentCosts.totalAnnual - compareCosts.totalAnnual)
    : 0;
  const savingMonthly = roundCurrency(savingAnnual / 12);

  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl">
      <div className="flex justify-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-lg hover:shadow-xl"
        >
          {showComparison ? "Hide comparison" : "Compare tariffs"}
        </button>
      </div>

      <div
        className={clsx("grid gap-6", {
          "grid-cols-1 md:grid-cols-3": showComparison,
          "grid-cols-1 md:grid-cols-2": !showComparison,
        })}
      >
        <Card title="Usage">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className={labelClass} htmlFor="electricityKwh">
                Electricity usage (kWh/year)
              </label>
              <input
                id="electricityKwh"
                className={inputClass}
                type="number"
                min="0"
                step="1"
                value={usageInput.electricityKwh}
                onChange={(e) =>
                  setUsageInput((prev) => ({
                    ...prev,
                    electricityKwh: e.target.value,
                  }))
                }
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="gasKwh">
                Gas usage (kWh/year)
              </label>
              <input
                id="gasKwh"
                className={inputClass}
                type="number"
                min="0"
                step="1"
                value={usageInput.gasKwh}
                onChange={(e) =>
                  setUsageInput((prev) => ({ ...prev, gasKwh: e.target.value }))
                }
              />
            </div>
          </div>
        </Card>

        <Card title="Current tariff">
          <TariffForm
            input={currentTariffInput}
            onChange={setCurrentTariffInput}
            idPrefix="current"
          />
        </Card>

        {showComparison && (
          <Card title="Compare tariff">
            <TariffForm
              input={compareTariffInput}
              onChange={setCompareTariffInput}
              idPrefix="compare"
            />
          </Card>
        )}
      </div>

      <div
        className={`grid gap-6 ${
          showComparison
            ? "grid-cols-1 md:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2"
        }`}
      >
        <Card title="Current cost">
          <CostBreakdownView {...currentCosts} />
        </Card>
        {showComparison && (
          <>
            <Card title="Comparison cost">
              <CostBreakdownView {...compareCosts} />
            </Card>
            <Card title="Savings">
              <div className="space-y-2">
                <Row label="Monthly">£{savingMonthly.toFixed(2)}</Row>
                <Row label="Annual">£{savingAnnual.toFixed(2)}</Row>
              </div>
            </Card>
          </>
        )}
        {!showComparison && (
          <Card title="Total cost">
            <div className="space-y-2">
              <Row label="Monthly">£{currentCosts.totalMonthly.toFixed(2)}</Row>
              <Row label="Annual">£{currentCosts.totalAnnual.toFixed(2)}</Row>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
