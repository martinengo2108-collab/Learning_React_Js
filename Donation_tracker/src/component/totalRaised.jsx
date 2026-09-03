export default function TotalRaised({ amount, goal }) {
  return (
    <div className="stat-card stat-card--primary">
      <span className="stat-label">Raised</span>
      <span className="stat-value">{amount.toLocaleString()} FCFA</span>
      <span className="stat-sublabel">of {goal.toLocaleString()} FCFA goal</span>
    </div>
  );
}