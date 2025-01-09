import DriftKing from "./assets/Tokyo-Drift.jpg"

function Card (){
    return (
        <div className="card">
            <img className="card-image" src={DriftKing} alt = "Jiffi Logo" ></img>
            <h2 className="card-title">Code</h2>
            <p className="card-text">Order 66</p>
        </div>
    );
}

export default Card