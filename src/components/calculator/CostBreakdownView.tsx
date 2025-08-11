import Row from "@/components/calculator/Row";

export default function CostBreakdownView(props: {
  electricityAnnual: number;
  gasAnnual: number;
  totalAnnual: number;
  totalMonthly: number;
}) {
  if (!props.electricityAnnual || !props.gasAnnual || !props.totalAnnual || !props.totalMonthly) {
    return null;
  }
  return (
    <div className="space-y-2">
      <Row label="Electricity (annual)">
        £{props.electricityAnnual.toFixed(2)}
      </Row>
      <Row label="Gas (annual)">£{props.gasAnnual.toFixed(2)}</Row>
      <Row label="Total (monthly)">£{props.totalMonthly.toFixed(2)}</Row>
      <Row label="Total (annual)">£{props.totalAnnual.toFixed(2)}</Row>
    </div>
  );
}
