export default function DonorCount({count}){
    return(
        <div className="stat-card">
            <span className="stat-label">Donors</span>
            <span className="stat-value">{count}</span>
            <span className="stat-sublabel">
                {count === 1 ? "person has given" : "people have given"}
            </span>

        </div>
    );
};