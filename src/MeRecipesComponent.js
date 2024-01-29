import checkmark from "./images/checked.png";

function MyRecepisComponents({
    label,
    image,
    calories,
    ingredients,
    cuisine,
    diet,
}) {
    return (
        <div>
            <div className="container">
                <h2>
                    {label}- {cuisine}
                </h2>
            </div>
            <ul className="container labels">
                {diet.map((diet, index) => (
                    <li key={index}>{diet}</li>
                ))}
            </ul>
            <div className="container calories">
                {" "}
                <p>{calories.toFixed()} calories</p>
            </div>
            <div className="container">
                <img src={image} alt="recipe" />
            </div>

            <div>
                <ul className="container list">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <div className="ingredients">
                                <img src={checkmark} className="checkmark" alt="icon" />

                                {ingredient}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default MyRecepisComponents;
