import goalEditor from "./goalEditor.jsx";

export default function progressBar({percent, goal , raised}){

    const clamped = Math.min(Math.max(percent,0),100);
    const ticks = [0,25,50,75,100]

    return(
        <div className="progress-gauge">
            <div className="progress-gauge__header">
                <span className="progress-gauge__percent">
                    {clamped.toFixed(0)}% funded
                </span>
                <span className="progress-gauge__goal">
                    Goal: {goal.toLocaleString()} FCFA
                </span>
            </div>
            <div 
            className="progress-guage__track"
            role="progressbar"
            aria-valuenow={Math.round(clamped)}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`${clamped.toFixed(0)} percent of fundraising goal reached`}>
              <div 
              className="progress-guage__fill"
              style={{left: `${clamped}%`}}>
                <span className="progress-gauge__flag-amount">{raised.toLocaleString()}</span>
                </div> 
                {ticks.map((tick) =>(
                    <div 
                    key={tick}
                    className="progress-guage__tick"
                    style={{left: `${tick}%`}}>
                        <div className="progress-guage__tick-label">{tick}%</div>

                    </div>
                ))}
            </div>
        </div>
    );

}