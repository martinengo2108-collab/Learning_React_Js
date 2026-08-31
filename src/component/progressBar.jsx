export default function progressBar({percent, goal , raised}){

    const clamped = Math.min(Math.max(percent,0),100);
    const ticks = [0,25,50,75,100]

    return(
        <div className="progress-gauge">
            <div className="progress-gauge__header">
                
            </div>
        </div>
    )

}