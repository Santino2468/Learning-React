
function Food(){

    const food = ["Orange","Apple"]

    return(
        <ul>
            {food.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
}

export default Food