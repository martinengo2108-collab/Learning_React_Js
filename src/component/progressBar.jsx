import goalEditor from "./goalEditor.jsx";

export default function progressBar({ percent, goal, raised, onUpdateGoal }) {

    const clamped = Math.min(Math.max(percent, 0), 100);
    const tickPercents = [0, 25, 50, 75, 100]

    return (
        <div className="progress-gauge">
            <div className="progress-gauge__header">
                <span className="progress-gauge__percent">
                    {clamped.toFixed(0)}% funded
                </span>


                <div className="progress-gauge__goal-row">
                    <span className="progress-gauge__goal">
                        Goal: {goal.toLocaleString()} FCFA
                    </span>

                    <goalEditor goal={goal} onUpdateGoal={onUpdateGoal} />
                </div>

            </div>
            <div
                className="progress-guage__track"
                role="progressbar"
                aria-valuenow={Math.round(clamped)}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${raised.toLocaleString()} FCFA raised of ${goal.toLocaleString()} FCFA fundraising goal reached`}>
                <div className="progress-gauge__fill" style={{ width: `${clamped}%` }}>
                    <div
                        className="progress-guage__flag"
                        style={{ left: `${clamped}%` }}>
                        <span className="progress-gauge__flag-amount">{raised.toLocaleString()}</span>
                    </div>
                    {tickPercents.map((tickPercent) => {
                        const tickAmount = Math.round((tickPercent / 100) * goal);
                        return (
                            <div
                                key={tickPercent}
                                className="progress-guage__tick"
                                style={{ left: `${tickPercent}%` }}>
                                <span className="progress-guage__tick-label">{tickAmount.toLocaleString()} FCFA</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );

}