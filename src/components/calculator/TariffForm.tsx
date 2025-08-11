import { TariffInput } from "@/utils/energy/energy.types";

export default function TariffForm({
  input,
  onChange,
  idPrefix = "",
}: {
  input: TariffInput;
  onChange: (value: TariffInput) => void;
  idPrefix?: string;
}) {
  const labelClass = "text-sm text-foreground/80";
  const inputClass =
    "w-full rounded-xl border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/5 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500";

  const elecStandingId = `${idPrefix}-elecStanding`;
  const elecUnitId = `${idPrefix}-elecUnit`;
  const gasStandingId = `${idPrefix}-gasStanding`;
  const gasUnitId = `${idPrefix}-gasUnit`;
  return (
    <div className="grid grid-cols-1 gap-4">
      <div>
        <label className={labelClass} htmlFor={elecStandingId}>
          Electricity standing charge (per day)
        </label>
        <input
          id={elecStandingId}
          className={inputClass}
          type="number"
          min="0"
          step="0.01"
          value={input.electricityStanding}
          onChange={(e) =>
            onChange({ ...input, electricityStanding: e.target.value })
          }
        />
      </div>
      <div>
        <label className={labelClass} htmlFor={elecUnitId}>
          Electricity unit rate (per kWh)
        </label>
        <input
          id={elecUnitId}
          className={inputClass}
          type="number"
          min="0"
          step="0.001"
          value={input.electricityUnit}
          onChange={(e) =>
            onChange({ ...input, electricityUnit: e.target.value })
          }
        />
      </div>
      <div>
        <label className={labelClass} htmlFor={gasStandingId}>
          Gas standing charge (per day)
        </label>
        <input
          id={gasStandingId}
          className={inputClass}
          type="number"
          min="0"
          step="0.01"
          value={input.gasStanding}
          onChange={(e) => onChange({ ...input, gasStanding: e.target.value })}
        />
      </div>
      <div>
        <label className={labelClass} htmlFor={gasUnitId}>
          Gas unit rate (per kWh)
        </label>
        <input
          id={gasUnitId}
          className={inputClass}
          type="number"
          min="0"
          step="0.001"
          value={input.gasUnit}
          onChange={(e) => onChange({ ...input, gasUnit: e.target.value })}
        />
      </div>
    </div>
  );
}
